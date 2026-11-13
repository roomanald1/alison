import { marked } from "marked";
import { useLocation } from "react-router-dom";
import { Banner } from "./Banner";
import { Helmet } from "react-helmet-async";

const blogMds = import.meta.glob<string>('/src/content/blogs/**/*.md', { eager: true, query: '?raw', import: 'default' });

export function BlogPost() {
  const [, , date, ...slugParts] = useLocation().pathname.split("/");
  const slug = slugParts.map(part => decodeURIComponent(part)).join("/");
  const content = Object.entries(blogMds).find(([path]) => path.endsWith(`${date}/${slug}.md`))?.[1] ?? "";
  const title = content.match(/^#\s+(.+)$/m)?.[1] ?? (slug ?? "Article").replace(/[-_]/g, " ");
  const description = content.replace(/^#.*$/gm, "").replace(/[*_`>#\[\]()]/g, "").replace(/\s+/g, " ").trim().slice(0, 155);
  const canonical = `https://alisondaytherapy.com/blog/${encodeURIComponent(date ?? "")}/${slug.split("/").map(encodeURIComponent).join("/")}`;

  return (<>
      <Helmet>
        <title>{`${title} | Alison Day Psychotherapy`}</title>
        <meta name="description" content={description || `Read ${title}, an article from Alison Day Psychotherapy.`} />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <section className="page-section">
        <Banner/>
        <h1>{title}</h1>
        <div className="container relative">
          <div
            dangerouslySetInnerHTML={{ __html: marked(content.replace(/^#\s+.+$/m, '')) }}
          />
        </div>
      </section>
  </>);
}
