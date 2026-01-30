import React from "react";
import headshot from "./assets/headshot.jpg"
import { marked } from "marked";

const aboutMd = import.meta.glob<string>('/src/content/about/**/*.md', { as: 'raw' });

export function About() {

    const [content, setContent] = React.useState<string>("");

    React.useEffect(() => {
        const match = Object.entries(aboutMd)[0];
        console.log(match)
        if (!match) return;

        const [, loader] = match;

        loader().then(raw => {
            console.log(raw)
            setContent(raw)
        });
    }, []);

    return (<section className='page-section'>

        <h1 id='about' className='section-title'>About</h1>
        <div className='container relative' style={{ display: "flex", flexDirection: "column", placeItems: 'center' }}>
            <img style={{ alignItems: 'center', marginBottom: 20 }} src={headshot} height={350} width={270} />
            <section className='section-text'>
                <div
                    dangerouslySetInnerHTML={{ __html: marked(content) }}
                />
            </section>
        </div>
    </section>)
}