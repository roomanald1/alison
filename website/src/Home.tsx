import React from "react";
import { marked } from "marked";
import { Banner } from "./Banner";
import { Helmet } from "react-helmet-async";
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

    return (<>

        <Helmet>
            <title>Alison Day Psychotherapy & Counselling | Sevenoaks </title>
            <meta
                name="description"
                content="Professional psychotherapy and counselling in Sevenoaks with Alison Day."
            />
            {/* OpenGraph */}
            <meta property="og:title" content="Alison Day Psychotherapy | Counselling & Psychotherapy in Sevenoaks" />
            <meta property="og:description" content="Professional psychotherapy and counselling in Sevenoaks with Alison Day. Support for anxiety, depression, relationships, and personal growth." />
            <meta property="og:url" content="https://alisonday.netlify.app/" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://alisonday.netlify.app/logo.png" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Alison Day Psychotherapy | Counselling & Psychotherapy in Sevenoaks" />
            <meta name="twitter:description" content="Professional psychotherapy and counselling in Sevenoaks with Alison Day." />
            <meta name="twitter:image" content="https://alisonday.netlify.app/logo.png" />
            <link rel="canonical" href="https://alisonday.netlify.app/" />
            <script type="application/ld+json">
                {`
      {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Alison Day Psychotherapy",
        "description": "Psychotherapy and counselling services for adults in Sevenoaks.",
        "url": "https://alisonday.netlify.app/",
        "image": "https://alisonday.netlify.app/logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sevenoaks",
          "addressCountry": "UK"
        },
        "areaServed": "Sevenoaks",
        "sameAs": []
      }
    `}
            </script>
        </Helmet>
        <section className='page-section'>
            <Banner children={(<div style={{ display: "block", marginTop: 20 }}>
                <img style={{ maxHeight: 140, height: "auto", width: "auto" }} src="/logo.png" alt="Alison Day logo" />
            </div>)} />
            <div className='container relative'>
                <section>
                    <div
                        dangerouslySetInnerHTML={{ __html: marked(content) }}
                    />
                </section>
            </div>
        </section>
    </>)
}