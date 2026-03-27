import React from "react";
import { marked } from "marked";
import { Banner } from "./Banner";

const md = import.meta.glob<string>('/src/content/services/**/*.md', { as: 'raw' });

export function Services() {

    const [content, setContent] = React.useState<string>("");

    React.useEffect(() => {
        const match = Object.entries(md)[0];
        console.log(match)
        if (!match) return;

        const [, loader] = match;

        loader().then(raw => {
            console.log(raw)
            setContent(raw)
        });
    }, []);

    return (<section className='page-section'>
        {Banner(            <h1 style={{
                fontSize: "62px",
                margin: 0, fontFamily: "Autography",
                fontWeight: 400
            }}>How I work</h1>)}
        <div className='container relative' style={{ display: "flex", flexDirection: "column", placeItems: 'center' }}>
            <section>
                <div
                    dangerouslySetInnerHTML={{ __html: marked(content) }}
                />
            </section>
        </div>
    </section>)
}