import { marked } from "marked";
import React from "react";
import { useParams } from "react-router-dom";
import { Contact } from "./Contact";

const blogMds = import.meta.glob<string>('/src/content/blogs/**/*.md', { as: 'raw' });

export function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = React.useState<string>("");

  React.useEffect(() => {
    if (!slug) return;

    console.log(slug)
    const match = Object.entries(blogMds).find(([path]) =>
      path.endsWith(`${slug}`)
    );
    console.log(match)
    if (!match) return;

    const [, loader] = match;

    loader().then(raw => {
        console.log(raw)
        setContent(raw)});
  }, [slug]);

  return (
    <>
    <section className="page-section">
      <div className="container relative">
        <div
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        />
      </div>
    </section>
    <Contact/>
    </>
  );
}
