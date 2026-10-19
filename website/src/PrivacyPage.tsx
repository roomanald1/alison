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
            <p>This notice explains how Alison Day handles information when you use this website or make an initial enquiry. If you begin therapy, Alison will provide separate information about how your therapy records are handled.</p>

            <h2>Who is responsible for your information?</h2>
            <p>Alison Day is responsible for personal information collected through this website. You can contact her at <a href="mailto:alisondaypsychotherapy@gmail.com">alisondaypsychotherapy@gmail.com</a> or on 07445 316 482.</p>

            <h2>Information collected through the contact form</h2>
            <p>The form asks for your name, email address and a message. This information is used to reply to your enquiry and, if you wish, arrange a free introductory call. Please keep your message brief and do not include detailed health or other sensitive information.</p>
            <p>Alison uses enquiry information to take steps you request before a possible therapy agreement (UK GDPR Article 6(1)(b)); where that basis does not apply, she relies on her legitimate interest in responding to enquiries (Article 6(1)(f)). If your enquiry does not lead to therapy, it is kept only for as long as needed to respond and complete any follow-up, then securely deleted, unless a legal or professional requirement means it must be kept longer.</p>

            <h2>Who receives the information?</h2>
            <p>Contact-form messages are sent using <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noreferrer">EmailJS</a> and delivered to Alison’s email account, which is provided by <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google</a>. The website is hosted by <a href="https://www.netlify.com/privacy/" target="_blank" rel="noreferrer">Netlify</a>. These providers process information as needed to provide their services. Their systems may process information outside the UK; their privacy information describes their processing and safeguards.</p>
            <p>If you accept optional content, the site loads the verification badge from <a href="https://www.psychologytoday.com/us/privacy-policy" target="_blank" rel="noreferrer">Psychology Today</a> and the Google Map on the Fees page. Those providers may receive technical information such as your IP address and browser details, and may use cookies or similar technologies. Their privacy information explains their processing.</p>

            <h2>Cookies and similar technologies</h2>
            <p>This website does not currently use Google Analytics or advertising trackers. Optional third-party content from Psychology Today and Google is blocked until you accept it. Your choice is stored in this browser for six months so the site can remember it. You can change your choice using “Cookie settings” in the footer.</p>

            <h2>Your rights</h2>
            <p>You can ask to access or correct your personal information, or ask for it to be erased or its use restricted. Depending on the circumstances, you may also have the right to object to processing or request a copy of information you provided. Contact Alison using the details above. You can also raise a concern with the <a href="https://ico.org.uk/make-a-complaint/">Information Commissioner’s Office</a>.</p>

            <h2>Changes to this notice</h2>
            <p>This notice may be updated if the website or the way enquiries are handled changes. The latest version will be available on this page.</p>
          </div>
        </div>
      </section>
    </>
  );
}
