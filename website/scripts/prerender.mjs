import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { createServer } from "vite";

const root = process.cwd();
const dist = path.join(root, "dist");
const template = await readFile(path.join(dist, "index.html"), "utf8");
const vite = await createServer({
  configFile: path.join(root, "vite.config.ts"),
  server: { middlewareMode: true },
  appType: "custom",
});

async function findBlogRoutes(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const routes = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) routes.push(...await findBlogRoutes(fullPath));
    else if (entry.name.endsWith(".md")) {
      const date = path.basename(path.dirname(fullPath));
      const slug = path.basename(entry.name, ".md");
      routes.push(`/blog/${date}/${slug}`);
    }
  }
  return routes;
}

try {
  const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");
  const routes = ["/", "/about", "/services", "/fees", "/contact", "/privacy", "/blog", ...await findBlogRoutes(path.join(root, "src/content/blogs"))];
  for (const route of [...routes, "/__prerender_not_found__"]) {
    const { appHtml, head } = render(route);
    const html = template
      .replace("<!--app-html-->", appHtml)
      .replace("</head>", `${head}\n</head>`);
    const output = route === "/__prerender_not_found__"
      ? path.join(dist, "404.html")
      : route === "/"
        ? path.join(dist, "index.html")
        : path.join(dist, `${route.slice(1)}.html`);
    await mkdir(path.dirname(output), { recursive: true });
    await writeFile(output, html);
  }

  const sitemapRoutes = [...routes];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapRoutes.map(route => `  <url><loc>https://alisondaytherapy.com${route === "/" ? "/" : route.split("/").map((part, index) => index === 0 ? part : encodeURIComponent(part)).join("/")}</loc></url>`).join("\n")}\n</urlset>\n`;
  await writeFile(path.join(dist, "sitemap.xml"), sitemap);
} finally {
  await vite.close();
}
