import React from "react";
import { marked } from "marked";
import { Banner } from "./Banner";

const md = import.meta.glob<string>('/src/content/fees/**/*.md', { as: 'raw' });

export function Fees() {

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

   <Banner children={(   <div className="section-title" style={{ fontSize: 30, letterSpacing: 1.5, color: "black", fontWeight: 400 }}>Fees</div>)}/>
        <div className='container relative' style={{ display: "flex", flexDirection: "column", placeItems: 'center' }}>
            <section>
                <div
                    dangerouslySetInnerHTML={{ __html: marked(content) }}
                />
            </section>
        </div>
    </section>)
}