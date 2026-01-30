import React from "react";
import { marked } from "marked";
import { Banner } from "./Banner";

const md = import.meta.glob<string>('/src/content/about/**/*.md', { as: 'raw' });

export function About() {

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
        {Banner(<h1>About</h1>)}
        <div className='container relative' style={{ display: "flex", flexDirection: "column", placeItems: 'center' }}>
            <section className='section-text'>
                <div
                    dangerouslySetInnerHTML={{ __html: marked(content) }}
                />
            </section>
        </div>
    </section>)
}