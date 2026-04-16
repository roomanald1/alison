import React from "react";
import { marked } from "marked";
import { Banner } from "./Banner";
import { Helmet } from "react-helmet-async";

const md = import.meta.glob<string>('/src/content/about/**/*.md', { as: 'raw' });

export function About() {

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
                <title>Alison Day Psychotherapy | Sevenoaks | About </title>
                <meta
                    name="description"
                    content="Learn about Alison Day, a qualified psychotherapist in Sevenoaks offering compassionate, confidential counselling and psychotherapy for adults."
                />
                <meta property="og:title" content="About Alison Day | Psychotherapist in Sevenoaks" />
                <meta property="og:description" content="Learn about Alison Day, a qualified psychotherapist in Sevenoaks offering compassionate, confidential counselling and psychotherapy for adults." />
                <meta property="og:url" content="https://alisonday.netlify.app/about" />
                <meta property="og:type" content="profile" />
                <meta property="og:image" content="https://alisonday.netlify.app/logo.png" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="About Alison Day | Psychotherapist in Sevenoaks" />
                <meta name="twitter:description" content="Learn about Alison Day, a qualified psychotherapist in Sevenoaks." />
                <meta name="twitter:image" content="https://alisonday.netlify.app/logo.png" />
                <link rel="canonical" href="https://alisonday.netlify.app/" />
                <script type="application/ld+json">
                    {`
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Alison Day",
        "jobTitle": "Psychotherapist",
        "url": "https://alisonday.netlify.app/about",
        "image": "https://alisonday.netlify.app/logo.png",
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


                <Banner/>

                <div className='container'>
                    <div className="section-title">
                        About Me
                    </div>
                    <div className="icon-divider">
                        <i className="fi fi-rr-user"></i>
                    </div>
                    <div className="profile">
                        <img src="/headshot.jpg" alt="Alison Day" style={{ borderRadius: 7 }} />

                        <div
                            dangerouslySetInnerHTML={{ __html: marked(content) }}
                        />
                    </div>
                </div>
            </section>
        </>)
}