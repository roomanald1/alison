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

    return (<section  className='page-section'>
           <Banner children={(   <div style={{ display: "block" , marginTop:20}}>
                <img style={{ maxHeight: 140, height: "auto", width: "auto" }} src="/logo.png" alt="Alison Day" />
            </div>)}/>
        <div className='container relative'>
            <section>
                <div
                    dangerouslySetInnerHTML={{ __html: marked(content) }}
                />
            </section>
        </div>
    </section>)
}