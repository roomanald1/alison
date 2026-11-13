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
                    <section className="work-faq" aria-labelledby="work-faq-title">
                        <p className="work-faq-kicker">A few practical questions</p>
                        <h2 id="work-faq-title">Frequently Asked Questions</h2>
                        <p className="work-faq-intro">It’s natural to have questions about starting therapy. Here are some of the things people often want to know.</p>
                        <div className="work-faq-list">
                            <details>
                                <summary>1. Will counselling provide a quick fix for my difficulties?</summary>
                                <p>Counselling isn't always about finding quick solutions. Psychodynamic psychotherapy focuses on developing a deeper understanding of yourself, your emotions and the patterns that may be influencing your life. This can involve exploring past experiences and relationships to understand how they affect you today. Meaningful and lasting change can take time, but gaining greater self-awareness can help you approach difficulties, relationships and life experiences in new ways.</p>
                            </details>
                            <details>
                                <summary>2. What happens when I first get in touch about counselling?</summary>
                                <p>We begin with a free 15-minute online consultation, giving us an opportunity to meet, get a sense of each other and discuss what has brought you to therapy. I'll explain how I work, and you can ask any questions you may have.</p>
                                <p>If we decide to work together, our first full counselling session lasts up to 75 minutes. This gives us time to explore in more detail what has brought you to therapy, your past experiences and relationships, and what you hope to gain from our work together. It also helps me understand how best to support you moving forward.</p>
                            </details>
                            <details>
                                <summary>3. Is everything I say in counselling confidential?</summary>
                                <p>Confidentiality is an important part of creating a safe and trusting therapeutic relationship. What you share during our counselling sessions is treated confidentially, subject to certain professional and legal exceptions, such as serious concerns about safety. I'll explain these boundaries clearly when we begin working together, so you understand how your privacy is protected.</p>
                            </details>
                            <details>
                                <summary>4. What's the difference between counselling and psychotherapy?</summary>
                                <p>The terms counselling and psychotherapy are often used interchangeably, and both offer a supportive space to explore emotional difficulties and personal experiences. However, psychotherapy training typically involves more extensive study and clinical development, allowing for deeper exploration of longstanding emotional patterns, relationships and experiences.</p>
                            </details>
                            <details>
                                <summary>5. What is psychodynamic psychotherapy?</summary>
                                <p>Psychodynamic psychotherapy explores how past experiences, relationships and unconscious feelings may influence your thoughts, emotions and behaviour today. By recognising patterns that may have developed over time, you can gain a deeper understanding of yourself and the underlying causes of difficulties you may be experiencing. This process can help you make sense of your feelings, develop greater self-awareness and find new ways of relating to yourself and others.</p>
                            </details>
                            <details>
                                <summary>6. How long will I need counselling for?</summary>
                                <p>Everyone's experience is different, so there is no fixed number of counselling sessions. Some people seek support with a particular difficulty, such as anxiety, bereavement or a significant life change, while others benefit from longer-term psychotherapy to explore deeper patterns and relationships. We can discuss your needs and expectations when we first meet and review our work together as therapy progresses.</p>
                            </details>
                        </div>
                        <div className="work-faq-contact">
                            <span>Still wondering whether therapy might suit you?</span>
                            <a href="/contact">Get in touch <span aria-hidden="true">↗</span></a>
                        </div>
                    </section>
                </div>
            </section>
        </>)
}
