import React from "react";
import { marked } from "marked";
import { Banner } from "./Banner";
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

    return (<section>
        {Banner(
            <>

                <img style={{maxHeight:150, marginBottom:10}} src="/logo.png" alt="Alison Day" />


                <div className="section-title">
                    Psychotherapy and Counselling in Sevenoaks and Online
                </div>
            </>)}
        <div className='container relative' style={{ display: "flex", flexDirection: "column", placeItems: 'center' }}>
            <section>
                <div
                    dangerouslySetInnerHTML={{ __html: marked(content) }}
                />
            </section>
        </div>
    </section>)
}