import React from "react";
import { marked } from "marked";
import { Banner } from "./Banner";
import _headshot from "./assets/headshot.jpg"
const md = import.meta.glob<string>('/src/content/home/**/*.md', { as: 'raw' });

export function Home() {

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
        {Banner(
            <>
                <h1 style={{
                    fontSize: "52px",
                    fontWeight: 700,
                    margin: 0,
                    color: "#222"
                }}>
                    Alison Day
                </h1>

                <p className="section-title">
                    Therapy & Emotional Wellbeing
                </p>
            </>)}
        <div className='container relative' style={{ display: "flex", flexDirection: "column", placeItems: 'center' }}>
            <section className='section-text'>
                <div
                    dangerouslySetInnerHTML={{ __html: marked(content) }}
                />
            </section>
        </div>
    </section>)
}