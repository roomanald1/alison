import { Helmet } from "react-helmet-async";

export function NotFoundPage() {
  return (
    <section className="page-section content-page">
      <Helmet>
        <title>Page not found | Alison Day Psychotherapy</title>
        <meta name="description" content="The page you’re looking for could not be found." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="container content-card">
        <p className="home-eyebrow">A little detour</p>
        <h1 className="section-title">This page can’t be found</h1>
        <p>The page may have moved, or the address may have been typed incorrectly.</p>
        <p><a href="/">Return to the homepage</a> or <a href="/contact">get in touch</a>.</p>
      </div>
    </section>
  );
}
