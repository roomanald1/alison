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
                <meta property="og:image" content="https://alisonday.netlify.app/logo.png" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Psychotherapy & Counselling Services | Alison Day" />
                <meta name="twitter:description" content="Explore psychotherapy and counselling services in Sevenoaks." />
                <meta name="twitter:image" content="https://alisonday.netlify.app/logo.png" />
                <link rel="canonical" href="https://alisonday.netlify.app/" />
                <script type="application/ld+json">
                    {`
      {
        "@context": "https://schema.org",
        "@type": "Offer",
        "url": "https://alisonday.netlify.app/fees",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "60",
          "priceCurrency": "GBP",
          "description": "Standard 50-minute psychotherapy session"
        },
        "itemOffered": {
          "@type": "Service",
          "name": "Psychotherapy Session",
          "provider": {
            "@type": "MedicalBusiness",
            "name": "Alison Day Psychotherapy",
            "url": "https://alisonday.netlify.app",
            "image": "https://alisonday.netlify.app/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sevenoaks",
              "addressCountry": "UK"
            }
          }
        },
        "availability": "https://schema.org/InStock",
        "eligibleRegion": {
          "@type": "Place",
          "name": "Sevenoaks"
        }
      }
    `}
                </script>
            </Helmet>
            <section className='page-section'>

                <Banner />
                <div className="section-title">
                    How I work
                </div>
                <div className="icon-divider">
                    <i className="fi fi-rr-couch"></i>
                </div>
                <div className='container relative' style={{ display: "flex", flexDirection: "column", placeItems: 'center' }}>

                    <section>

                        <div
                            dangerouslySetInnerHTML={{ __html: marked(content) }}
                        />
                    </section>
                </div>
            </section>
        </>)
}