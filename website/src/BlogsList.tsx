import React from "react";
import { marked } from 'marked';
import { parse } from "date-fns";
import { useNavigate } from "react-router-dom";

const blogMds = import.meta.glob<string>('/src/content/blogs**/*.md', { as: 'raw' });
export async function loadBlogs(number_of_items: number) {
    const entries = await Promise.all(
        Object.entries(blogMds).slice(0, number_of_items).map(async ([path, loader]) => {
            let filename = path.split('/').pop() ?? "";
            let date = filename?.split(" -- ")?.shift()?.replace(".md", "") ?? "";
            return ({
                date: parse(date, "dd-MM-yyyy", new Date()),
                filename,
                raw_date: date,
                content: await loader() // <-- plain string
            })
        })
    );

    return entries;
}

export function BlogsList(args: {number_of_items: number, is_dark: boolean}) {
    const navigate = useNavigate();

    const [blogs, setBlogs] = React.useState<{ date: Date, raw_date: String, filename: String, content: string }[]>([]);

    React.useEffect(() => {
        loadBlogs(args.number_of_items).then(blogs => {
            let sorted = blogs.sort((a, b) => b.date.getTime() - a.date.getTime());
            setBlogs(sorted)
        });
    }, []);

    return (<section id="blog" style={{marginTop: 10}} className={'page-section ' + (args.is_dark ? "bg-dark" : "")}>
        <div className='container relative'>
            <div className='section-title'>BLOG</div>
            {blogs.map((doc) =>
                <div key={doc.raw_date.toString()} style={{ marginBottom: 10 }}>
                    <div
                        dangerouslySetInnerHTML={{ __html: marked(doc.content.substring(0, 200) + "...") }}
                    />
                    <button onClick={() => navigate(`/blog/${doc.filename}`)} className={(args.is_dark ? "btn-w" : "btn") + " btn-mod btn-small btn-round"}>Read More</button>
                </div>

            )}
        </div>

    </section>);
}