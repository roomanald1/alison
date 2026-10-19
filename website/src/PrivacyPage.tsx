import { Helmet } from "react-helmet-async";
import { Banner } from "./Banner";

export function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Notice | Alison Day Psychotherapy</title>
        <meta name="description" content="How Alison Day Psychotherapy handles information submitted through this website." />
        <link rel="canonical" href="https://alisonday.netlify.app/privacy" />
      </Helmet>
      <section className="page-section content-page privacy-page">
        <Banner />
        <div className="container relative content-card">
          <h1 className="section-title">Privacy notice</h1>
          <div className="page-copy">
            <p><strong>Last updated: 19 October 2026</strong></p>
            <p>This notice explains how Alison Day handles personal information when you visit this website or make an initial enquiry. It covers the website and enquiry stage only. If you begin therapy, Alison will give you information about the separate records kept as part of therapy before those records are created.</p>

            <h2>Who is responsible for your information?</h2>
            <p>Alison Day is the data controller for personal information collected through this website. She is registered with the Information Commissioner’s Office (ICO) as a fee payer, registration reference <a href="https://ico.org.uk/ESDWebPages/Entry/ZC147017" target="_blank" rel="noreferrer">ZC147017</a> (registered 14 May 2026; registration expires 13 May 2027). You can contact her at <a href="mailto:alisondaypsychotherapy@gmail.com">alisondaypsychotherapy@gmail.com</a> or on 07445 316 482.</p>

            <h2>Information collected through the contact form</h2>
            <p>The contact form requires your name, email address and message so Alison can respond and, if you wish, arrange a free introductory call. If you do not provide these details, she will not be able to respond through the form. Please keep your message brief and do not include detailed health or other sensitive information. If you choose to include health information, it may be special-category data and needs additional protection under data-protection law.</p>
            <p>Alison uses enquiry information to take steps you request before a possible therapy agreement (UK GDPR Article 6(1)(b)); where that basis does not apply, she relies on her legitimate interest in responding to enquiries (Article 6(1)(f)). An enquiry that does not lead to therapy is kept only while it is needed to respond and complete follow-up, then deleted unless a legal or professional requirement means it must be kept longer. Alison should review enquiry records regularly and delete them when they are no longer needed.</p>

            <h2>Information collected when you visit the site</h2>
            <p>The site host may process basic technical information in server logs, such as your IP address, the date and time of a request, the page requested, and browser or device details. This is used to deliver, secure and troubleshoot the website. The site does not use Google Analytics or advertising trackers.</p>

            <h2>Who receives the information?</h2>
            <p>Contact-form messages are sent using <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noreferrer">EmailJS</a> and delivered to Alison’s email account, which is provided by <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google</a>. The website is hosted by <a href="https://www.netlify.com/privacy/" target="_blank" rel="noreferrer">Netlify</a>. These providers process information to provide their services. They may process information outside the UK. Where required, international transfers must be protected by a recognised transfer mechanism under UK data-protection law; see each provider’s privacy information for details.</p>
            <p>If you accept optional content, the site loads the verification badge from <a href="https://www.psychologytoday.com/us/privacy-policy" target="_blank" rel="noreferrer">Psychology Today</a> and the Google Map on the Fees page. Those providers may receive technical information such as your IP address and browser details, and may use cookies or similar technologies. Their privacy information explains their processing.</p>

            <h2>Cookies and similar technologies</h2>
            <p>This website does not currently use Google Analytics or advertising trackers. Optional third-party content from Psychology Today and Google is blocked until you accept it. Your choice is stored in this browser for six months so the site can remember it. You can change your choice using “Cookie settings” in the footer.</p>

            <h2>Your rights</h2>
            <p>You can ask to access or correct your personal information, or ask for it to be erased or its use restricted. Depending on the circumstances, you may also have the right to object to processing or request a copy of information you provided. Contact Alison using the details above. She will respond to rights requests within the time required by law. You can also raise a concern with the <a href="https://ico.org.uk/make-a-complaint/">Information Commissioner’s Office</a>.</p>

            <h2>Data protection complaints</h2>
            <p>If you are unhappy with how Alison has handled your personal information, email her at <a href="mailto:alisondaypsychotherapy@gmail.com">alisondaypsychotherapy@gmail.com</a> with the subject “Data protection complaint”. You can also raise a complaint by phone using the number above. Under the Data (Use and Access) Act 2025, Alison will acknowledge your complaint within 30 days, investigate it without undue delay, keep you informed, and tell you the outcome. You can still complain to the ICO at any time.</p>

            <h2>Automated decisions</h2>
            <p>Alison does not use your enquiry information to make decisions about you by automated means, and does not use it for profiling.</p>

            <h2>Changes to this notice</h2>
            <p>This notice may be updated if the website or the way enquiries are handled changes. The latest version will be available on this page.</p>
          </div>
        </div>
      </section>
    </>
  );
}
