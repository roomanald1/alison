import React from "react";
import { marked } from "marked";
import { Banner } from "./Banner";
import { Helmet } from "react-helmet-async";

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

    return (


        <>

            <Helmet>
                <title>Alison Day Psychotherapy | Sevenoaks | Services </title>
                <meta
                    name="description"
                    content="Explore psychotherapy and counselling services offered by Alison Day in Sevenoaks. Compassionate, confidential support tailored to your needs."
                />
                <meta property="og:title" content="Psychotherapy & Counselling Services | Alison Day | Sevenoaks" />
                <meta property="og:description" content="Explore psychotherapy and counselling services offered by Alison Day in Sevenoaks. Compassionate, confidential support tailored to your needs." />
                <meta property="og:url" content="https://alisonday.netlify.app/services" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://alisonday.netlify.app/therapy-room.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Psychotherapy & Counselling Services | Alison Day" />
                <meta name="twitter:description" content="Explore psychotherapy and counselling services in Sevenoaks." />
                <meta name="twitter:image" content="https://alisonday.netlify.app/therapy-room.png" />
                <link rel="canonical" href="https://alisonday.netlify.app/services" />
                <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Service",
                      "name": "Psychodynamic psychotherapy",
                      "serviceType": "Psychotherapy and counselling",
                      "description": "Psychodynamic psychotherapy for adults and young people aged 16+ in Sevenoaks and online throughout the UK.",
                      "url": "https://alisonday.netlify.app/services",
                      "provider": {
                        "@type": "Person",
                        "name": "Alison Day",
                        "jobTitle": "Psychotherapist",
                        "url": "https://alisonday.netlify.app/about"
                      },
                      "areaServed": [
                        { "@type": "City", "name": "Sevenoaks" },
                        { "@type": "Country", "name": "United Kingdom" }
                      ]
                    })}
                </script>
            </Helmet>
            <section className='page-section content-page work-page'>

                <Banner />
                <div className='container relative content-card'>
                    <h1 className="section-title">How I work</h1>
                    <div className="icon-divider"><i className="fi fi-rr-couch"></i></div>
                    <section className='page-copy'>
                        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
                    </section>
                </div>
            </section>
        </>)
}