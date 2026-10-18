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
                <meta property="og:image" content="https://alisonday.netlify.app/therapy-room.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Therapy Fees | Alison Day Psychotherapy" />
                <meta name="twitter:description" content="Psychotherapy and counselling fees in Sevenoaks." />
                <meta name="twitter:image" content="https://alisonday.netlify.app/therapy-room.png" />
                <link rel="canonical" href="https://alisonday.netlify.app/fees" />
                <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "ProfessionalService",
                      "@id": "https://alisonday.netlify.app/#business",
                      "name": "Alison Day Psychotherapy",
                      "url": "https://alisonday.netlify.app/",
                      "image": "https://alisonday.netlify.app/therapy-room.png",
                      "telephone": "+44 7445 316482",
                      "priceRange": "£50–£90",
                      "areaServed": ["Sevenoaks", "United Kingdom"],
                      "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Psychotherapy session fees",
                        "itemListElement": [
                          {
                            "@type": "Offer",
                            "name": "Ongoing in-person session (50 minutes)",
                            "price": "60",
                            "priceCurrency": "GBP",
                            "itemOffered": { "@type": "Service", "name": "In-person psychotherapy session" }
                          },
                          {
                            "@type": "Offer",
                            "name": "Ongoing online session (50 minutes)",
                            "price": "50",
                            "priceCurrency": "GBP",
                            "itemOffered": { "@type": "Service", "name": "Online psychotherapy session" }
                          },
                          {
                            "@type": "Offer",
                            "name": "Initial in-person consultation (75 minutes)",
                            "price": "90",
                            "priceCurrency": "GBP"
                          },
                          {
                            "@type": "Offer",
                            "name": "Initial online consultation (75 minutes)",
                            "price": "75",
                            "priceCurrency": "GBP"
                          }
                        ]
                      }
                    })}
                </script>
            </Helmet>
            <section className='page-section content-page fees-page'>

                <Banner />
                <div className='container relative content-card'>
                    <h1 className="section-title">Fees</h1>
                    <div className="icon-divider"><i className="fi fi-rr-calendar-day"></i></div>
                    <section className='page-copy'>
                        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
                    </section>
                </div>
            </section></>)
}