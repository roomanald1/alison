import React from "react";
import { marked } from "marked";
import { Banner } from "./Banner";
import { Helmet } from "react-helmet-async";

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

    return (
        <>

            <Helmet>
                <title>Alison Day Psychotherapy | Sevenoaks | Fees </title>
                <meta
                    name="description"
                    content="View psychotherapy and counselling fees for sessions with Alison Day in Sevenoaks. Learn about session length, pricing, and available options."
                />
                <meta property="og:title" content="Therapy Fees | Alison Day Psychotherapy" />
                <meta property="og:description" content="View psychotherapy and counselling fees for sessions with Alison Day in Sevenoaks. Learn about session length, pricing, and available options." />
                <meta property="og:url" content="https://alisonday.netlify.app/fees" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://alisonday.netlify.app/logo.png" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Therapy Fees | Alison Day Psychotherapy" />
                <meta name="twitter:description" content="Psychotherapy and counselling fees in Sevenoaks." />
                <meta name="twitter:image" content="https://alisonday.netlify.app/logo.png" />
                <link rel="canonical" href="https://alisonday.netlify.app/" />
                <script type="application/ld+json">
                    {`
      {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Alison Day Psychotherapy",
        "url": "https://alisonday.netlify.app",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sevenoaks",
          "addressCountry": "UK"
        }
      }
    `}
                </script>
            </Helmet>
            <section className='page-section'>

                <Banner />
                 <div className="section-title">
                        Fees
                    </div>
                    <div className="icon-divider">
                        <i className="fi fi-rr-calendar-day"></i>
                    </div>
                <div className='container relative' style={{ display: "flex", flexDirection: "column", placeItems: 'center' }}>
                   
                    <section>
                        <div
                            dangerouslySetInnerHTML={{ __html: marked(content) }}
                        />
                    </section>
                </div>
            </section></>)
}