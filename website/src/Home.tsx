import { marked } from "marked";
import { Banner } from "./Banner";
import { Helmet } from "react-helmet-async";
const md = import.meta.glob<string>('/src/content/home/**/*.md', { eager: true, query: '?raw', import: 'default' });

export function Home() {

    const content = Object.values(md)[0] ?? "";

    return (<>

        <Helmet>
            <title>Alison Day Psychotherapy & Counselling | Sevenoaks </title>
            <meta name="google-site-verification" content="Ioney9rAuqd4MypEad3wggtSSLo1SQUl1VcHPghWWKo" />
            <meta
                name="description"
                content="Professional psychotherapy and counselling in Sevenoaks with Alison Day."
            />
            {/* OpenGraph */}
            <meta property="og:title" content="Alison Day Psychotherapy | Counselling & Psychotherapy in Sevenoaks" />
            <meta property="og:description" content="Professional psychotherapy and counselling in Sevenoaks with Alison Day. Support for anxiety, depression, relationships, and personal growth." />
            <meta property="og:url" content="https://alisondaytherapy.com/" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://alisondaytherapy.com/headshot.jpg" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Alison Day Psychotherapy | Counselling & Psychotherapy in Sevenoaks" />
            <meta name="twitter:description" content="Professional psychotherapy and counselling in Sevenoaks with Alison Day." />
            <meta name="twitter:image" content="https://alisondaytherapy.com/headshot.jpg" />
            <link rel="canonical" href="https://alisondaytherapy.com/" />
            <script type="application/ld+json">
                {`
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Alison Day Psychotherapy",
        "description": "Psychotherapy and counselling services for adults in Sevenoaks.",
        "url": "https://alisondaytherapy.com/",
        "image": "https://alisondaytherapy.com/headshot.jpg",
        "telephone": "+44 7445 316482",
        "priceRange": "£50–£90",
        "areaServed": ["Sevenoaks", "United Kingdom"],
        "sameAs": ["https://www.psychologytoday.com/profile/1673762"]
      }
    `}
            </script>
        </Helmet>
        <section className='page-section home-page'>
            <Banner />
            <div className='container relative home-container'>
                <div className='home-layout'>
                    <section className='home-hero'>
                        <div className='home-hero-copy'>
                            <p className='home-eyebrow'>Psychodynamic psychotherapy</p>
                            <h1>Psychotherapy and Counselling</h1>
                            <p className='home-hero-location'>In Sevenoaks and online</p>
                            <a className='home-cta' href='/contact'>Arrange a free 15-minute call <span aria-hidden='true'>&#8594;</span></a>
                        </div>
                        <img className='home-portrait' src='/headshot.jpg' alt='Alison Day, psychotherapist' width={900} height={1349} fetchPriority='high' decoding='async' />
                    </section>
                    <section className='home-copy'>
                        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
                    </section>
                </div>
            </div>
        </section>
    </>)
}