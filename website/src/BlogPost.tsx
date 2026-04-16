import { marked } from "marked";
import React from "react";
import { useParams } from "react-router-dom";
import { Banner } from "./Banner";

const blogMds = import.meta.glob<string>('/src/content/blogs/**/*.md', { as: 'raw' });

export function BlogPost() {
  const { date, slug } = useParams();
  const [content, setContent] = React.useState<string>("");

  React.useEffect(() => {
    if (!slug || !date) return;

    const match = Object.entries(blogMds).find(([path]) =>
      path.endsWith(`${date}/${slug}.md`)
    );
    console.log(match)
    if (!match) return;

    const [, loader] = match;

    loader().then(raw => {
      console.log(raw)
      setContent(raw)
    });
  }, [slug, date]);

  return (      <section className="page-section">
        <Banner/>
        <h1>{slug}</h1>
        <div className="container relative">
          <div
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          />
        </div>
      </section>
  );
}
