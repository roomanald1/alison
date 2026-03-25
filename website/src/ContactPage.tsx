import React from "react";
import { marked } from "marked";
import { Banner } from "./Banner";

const md = import.meta.glob<string>('/src/content/contact/**/*.md', { as: 'raw' });

export function ContactPage() {

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
        {Banner(<>
            <h1>CONTACT</h1>
        </>
        )}
        <div className='container relative'>
            <div
                dangerouslySetInnerHTML={{ __html: marked(content) }}
            />
        </div>
    </section>)
}