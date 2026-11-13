import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import type { ComponentProps } from "react";
import App from "./App";

export function render(url: string) {
  const helmetContext: NonNullable<ComponentProps<typeof HelmetProvider>["context"]> = {};
  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}><App /></StaticRouter>
    </HelmetProvider>,
  );
  const headElements: string[] = [];
  const bodyHtml = appHtml.replace(
    /<title>[\s\S]*?<\/title>|<meta\b[^>]*\/>|<link\b[^>]*\/>|<script\b[^>]*>[\s\S]*?<\/script>/g,
    element => {
      headElements.push(element);
      return "";
    },
  );
  return { appHtml: bodyHtml, head: headElements.join("\n") };
}
