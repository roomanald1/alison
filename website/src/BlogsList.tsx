import React from "react";
import { marked } from 'marked';
import { parse } from "date-fns";
import { useNavigate } from "react-router-dom";
import { Banner } from "./Banner";

const blogMds = import.meta.glob<string>('/src/content/blogs/**/*.md', { as: 'raw' });
export async function loadBlogs(number_of_items: number | "all") {
    let num = number_of_items == "all" ? undefined : Number(number_of_items)
    const entries = await Promise.all(
        Object.entries(blogMds).slice(0, num).map(async ([path, loader]) => {
            path = path.replace(".md", "");
            let split = path.split('/')
            let filename = split.pop() ?? "";
            let dateStr = split.pop() ?? ""
            let date = dateStr ?? "";
            return ({
                date: parse(date, "dd-MM-yyyy", new Date()),
                filename,
                path: dateStr + "/" + filename,
                raw_date: date,
                content: await loader() // <-- plain string
            })
        })
    );

    return entries;
}

export function BlogsList(args: { number_of_items: number | "all", is_dark: boolean }) {
    const navigate = useNavigate();

    const [blogs, setBlogs] = React.useState<{ date: Date, raw_date: String, filename: String, path: String, content: string }[]>([]);

    React.useEffect(() => {
        loadBlogs(args.number_of_items).then(blogs => {
            let sorted = blogs.sort((a, b) => b.date.getTime() - a.date.getTime());
            setBlogs(sorted)
        });
    }, []);

    return (<section id="blog" className={'page-section ' + (args.is_dark ? "bg-dark" : "")}>
        {Banner(            <h1 style={{
                fontSize: "62px",
                margin: 0, fontFamily: "Autography",
                fontWeight: 400
            }}>Blog</h1>)}
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