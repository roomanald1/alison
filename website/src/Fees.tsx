import React from "react";
import { marked } from "marked";
import { Banner } from "./Banner";
import { Helmet } from "react-helmet-async";
import { useCookieConsent } from "./CookieConsent";

const md = import.meta.glob<string>('/src/content/fees/**/*.md', { as: 'raw' });

export function Fees() {

    const [content, setContent] = React.useState<string>("");
    const { choice, reset } = useCookieConsent();

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
                    <div className="fees-map-embed">
                        {choice === "accepted" ? (
                            <iframe
                                title="Google Map showing Alison Day Psychotherapy business location in Sevenoaks"
                                src="https://maps.google.com/maps?cid=14366542492817895060&output=embed"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        ) : (
                            <div className="fees-map-prompt">
                                <p>{choice === "rejected" ? "Optional Google Map content is blocked by your cookie choice." : "Choose whether to load the Google Map. Google may receive basic device information and use cookies or similar technologies."}</p>
                                {choice === "rejected" && <button type="button" className="btn-mod btn-round" onClick={reset}>Change cookie settings</button>}
                                <a href="https://www.google.com/maps?cid=14366542492817895060" target="_blank" rel="noreferrer">Open in Google Maps</a>
                            </div>
                        )}
                    </div>
                </div>
            </section></>)
}