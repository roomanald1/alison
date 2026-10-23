import { marked } from "marked";
import { Banner } from "./Banner";
import { Helmet } from "react-helmet-async";

const md = import.meta.glob<string>('/src/content/contact/**/*.md', { eager: true, query: '?raw', import: 'default' });

export function ContactPage() {

    const content = Object.values(md)[0] ?? "";

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
                <meta property="og:url" content="https://alisondaytherapy.com/contact" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://alisondaytherapy.com/headshot.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Alison Day | Psychotherapy in Sevenoaks" />
                <meta name="twitter:description" content="Contact Alison Day Psychotherapy to book a session or ask a question." />
                <meta name="twitter:image" content="https://alisondaytherapy.com/headshot.jpg" />
                <link rel="canonical" href="https://alisondaytherapy.com/contact" />
                <script type="application/ld+json">
                    {`
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Alison Day Psychotherapy",
        "url": "https://alisondaytherapy.com/contact",
        "description": "Contact Alison Day Psychotherapy in Sevenoaks to book an appointment or ask a question.",
        "about": {
          "@type": "ProfessionalService",
          "name": "Alison Day Psychotherapy",
          "url": "https://alisondaytherapy.com/"
        }
      }
    `}
                </script>
            </Helmet>
            <section className='page-section content-page contact-page'>
                <Banner />

                <div className='container relative content-card'>
                    <h1 className="section-title">
                        Contact
                    </h1>
                    <div className="icon-divider">
                        <i className="fi fi-rr-phone-flip"></i>
                    </div>
                    <div className="page-copy" dangerouslySetInnerHTML={{ __html: marked(content) }} />
                </div>
            </section>
        </>)
}
