import { marked } from 'marked';
import { parse } from "date-fns";
import { useNavigate } from "react-router-dom";
import { Banner } from "./Banner";

const blogMds = import.meta.glob<string>('/src/content/blogs/**/*.md', { eager: true, query: '?raw', import: 'default' });
export function loadBlogs(number_of_items: number | "all") {
    const limit = number_of_items === "all" ? undefined : Number(number_of_items);
    return Object.entries(blogMds)
        .slice(0, limit)
        .map(([path, content]) => {
            const pathWithoutExtension = path.replace(".md", "");
            const parts = pathWithoutExtension.split("/");
            const filename = parts.pop() ?? "";
            const date = parts.pop() ?? "";

            return {
                date: parse(date, "dd-MM-yyyy", new Date()),
                filename,
                path: `${date}/${filename}`,
                raw_date: date,
                content,
            };
        });
}

export function BlogsList(args: { number_of_items: number | "all", is_dark: boolean }) {
    const navigate = useNavigate();

    const blogs = loadBlogs(args.number_of_items).sort((a, b) => b.date.getTime() - a.date.getTime());

    return (<section id="blog" className={'page-section ' + (args.is_dark ? "bg-dark" : "")}>
          <Banner/>
        <div className='container relative'>
            {blogs.map((doc) =>
                <div key={doc.raw_date.toString()} style={{ marginBottom: 10 }}>
                    <div
                        dangerouslySetInnerHTML={{ __html: marked(doc.content.substring(0, 200) + "...") }}
                    />
                    <button onClick={() => navigate(`/blog/${doc.path}`)} className={(args.is_dark ? "btn-w" : "btn") + " btn-mod btn-small btn-round"}>Read More</button>
                </div>

            )}
        </div>

    </section>);
}