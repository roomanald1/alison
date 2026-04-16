import React from "react";
import { marked } from "marked";
import { Banner } from "./Banner";
import { Helmet } from "react-helmet-async";

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

    return (


        <>

            <Helmet>
                <title>Alison Day Psychotherapy | Sevenoaks | Contact </title>
                <meta
                    name="description"
                    content="Get in touch with Alison Day Psychotherapy in Sevenoaks. Book an appointment or ask any questions."
                />
                <meta property="og:title" content="Contact Alison Day | Psychotherapy in Sevenoaks" />
                <meta property="og:description" content="Get in touch with Alison Day Psychotherapy in Sevenoaks to book an appointment or ask a question." />
                <meta property="og:url" content="https://alisonday.netlify.app/contact" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://alisonday.netlify.app/logo.png" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Contact Alison Day | Psychotherapy in Sevenoaks" />
                <meta name="twitter:description" content="Contact Alison Day Psychotherapy to book a session or ask a question." />
                <meta name="twitter:image" content="https://alisonday.netlify.app/logo.png" />
                <link rel="canonical" href="https://alisonday.netlify.app/" />
                <script type="application/ld+json">
                    {`
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Alison Day Psychotherapy",
        "url": "https://alisonday.netlify.app/contact",
        "description": "Contact Alison Day Psychotherapy in Sevenoaks to book an appointment or ask a question.",
        "about": {
          "@type": "MedicalBusiness",
          "name": "Alison Day Psychotherapy",
          "url": "https://alisonday.netlify.app/"
        }
      }
    `}
                </script>
            </Helmet>
            <section className='page-section'>
                <Banner />

                <div className='container relative'>
                    <div className="section-title">
                        Contact
                    </div>
                    <div className="icon-divider">
                        <i className="fi fi-rr-phone-flip"></i>
                    </div>
                    <div
                        dangerouslySetInnerHTML={{ __html: marked(content) }}
                    />
                </div>
            </section>
        </>)
}