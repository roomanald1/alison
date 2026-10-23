import { marked } from "marked";
import { useParams } from "react-router-dom";
import { Banner } from "./Banner";

const blogMds = import.meta.glob<string>('/src/content/blogs/**/*.md', { eager: true, query: '?raw', import: 'default' });

export function BlogPost() {
  const { date, slug } = useParams();
  const content = Object.entries(blogMds).find(([path]) => path.endsWith(`${date}/${slug}.md`))?.[1] ?? "";

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
