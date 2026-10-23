import { marked } from "marked";
import { Banner } from "./Banner";
import { Helmet } from "react-helmet-async";

const md = import.meta.glob<string>('/src/content/services/**/*.md', { eager: true, query: '?raw', import: 'default' });

export function Services() {

    const content = Object.values(md)[0] ?? "";

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
                <meta property="og:url" content="https://alisondaytherapy.com/services" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://alisondaytherapy.com/therapy-room.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Psychotherapy & Counselling Services | Alison Day" />
                <meta name="twitter:description" content="Explore psychotherapy and counselling services in Sevenoaks." />
                <meta name="twitter:image" content="https://alisondaytherapy.com/therapy-room.jpg" />
                <link rel="canonical" href="https://alisondaytherapy.com/services" />
                <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Service",
                      "name": "Psychodynamic psychotherapy",
                      "serviceType": "Psychotherapy and counselling",
                      "description": "Psychodynamic psychotherapy for adults and young people aged 16+ in Sevenoaks and online throughout the UK.",
                      "url": "https://alisondaytherapy.com/services",
                      "provider": {
                        "@type": "Person",
                        "name": "Alison Day",
                        "jobTitle": "Psychotherapist",
                        "url": "https://alisondaytherapy.com/about"
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