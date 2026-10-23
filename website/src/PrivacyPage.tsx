import { Helmet } from "react-helmet-async";
import { Banner } from "./Banner";

const policyHtml = `
            <p><strong>Last updated: October 2026</strong></p>
            <p>This privacy notice explains how I collect, use, store and protect personal information in my therapy practice.</p>
            <p>I am Alison Day, a psychotherapist working in person and online. I am the data controller for personal information I collect through Alison Day Psychotherapy, registered with the Information Commissioner’s Office (ICO) as a fee payer, registration reference ZC147017.</p>
            <p>This means I am responsible for deciding how personal information is used and for keeping it safe.</p>
            <p>If you have any questions about this privacy notice, or about how your information is handled, you can contact me at:</p>
            <p>Email: <a href="mailto:alisondaypsychotherapy@gmail.com">alisondaypsychotherapy@gmail.com</a></p>
            <p>Website: <a href="https://www.alisondaytherapy.com" target="_blank" rel="noreferrer">www.alisondaytherapy.com</a></p>
            <p>This privacy notice applies to people who contact me about therapy, current and former clients, and visitors to my website.</p>
            <h2>Information I collect</h2>
            <p>I may collect and use the following information.</p>
            <p>When you contact me, I may collect:</p>
            <ul>
              <li>your name</li>
              <li>your email address</li>
              <li>your phone number</li>
              <li>the information you choose to share in your enquiry</li>
              <li>any preferences around contact, availability or therapy format</li>
            </ul>
            <p>If we arrange an initial call or begin therapy, I may also collect:</p>
            <ul>
              <li>your address</li>
              <li>your date of birth</li>
              <li>your GP details</li>
              <li>emergency contact details, where appropriate</li>
              <li>relevant health, mental health or wellbeing information</li>
              <li>information about your personal history, relationships, work, identity, family, circumstances and reasons for seeking therapy</li>
              <li>brief clinical notes</li>
              <li>attendance, payment and appointment information</li>
              <li>correspondence between us</li>
            </ul>
            <p>Some of this information may be classed as special category data under UK data protection law. This includes information about health, mental health, sexuality, ethnicity, religion or other sensitive areas where these are relevant to therapy.</p>
            <p>I only collect information that is necessary for providing therapy safely, ethically and professionally.</p>
            <h2>How I use your information</h2>
            <p>I use your personal information to:</p>
            <ul>
              <li>respond to enquiries</li>
              <li>arrange initial calls and appointments</li>
              <li>provide therapy</li>
              <li>keep appropriate clinical records</li>
              <li>manage payments, invoices and appointments</li>
              <li>communicate with you about sessions</li>
              <li>meet legal, professional and ethical responsibilities</li>
              <li>manage risk, safeguarding or emergency situations where necessary</li>
              <li>maintain insurance, tax and accounting records</li>
              <li>respond to data protection requests or complaints</li>
            </ul>
            <p>I do not sell your personal information.</p>
            <h2>Lawful basis for using your information</h2>
            <p>Under UK GDPR, I need a lawful basis for using personal information.</p>
            <p>For different parts of my work, I may rely on different lawful bases under Article 6 UK GDPR. For example, I may rely on contract where processing is needed to arrange or provide therapy, legitimate interests where I need to run my practice safely and keep appropriate records, and legal obligation where I need to keep or share information to comply with the law.</p>
            <ul>
              <li>contract: where information is needed to arrange and provide therapy</li>
              <li>legitimate interests: where I need to use information to run my practice safely, respond to enquiries, keep appropriate records and protect both you and me</li>
              <li>legal obligation: where I need to keep or share information to comply with the law</li>
            </ul>
            <p>Where I process information about your physical or mental health or other special category data, I rely on Article 9(2)(h) UK GDPR (health or social care purposes) where applicable, and/or Article 9(2)(f) (establishment, exercise or defence of legal claims) where relevant. Processing is carried out in accordance with the Data Protection Act 2018 and appropriate safeguards are applied to protect confidentiality.</p>
            <p>Where I ask for your consent for something specific, I will explain what I am asking for and whether you can withdraw that consent. Consent is not the only lawful basis available under data protection law, and I will only rely on it where it is appropriate to do so.</p>
            <h2>Confidentiality</h2>
            <p>Therapy is confidential, but confidentiality is not absolute. I will not share what you tell me unless there is a lawful, ethical or safeguarding reason to do so, and where possible I will limit any sharing to the minimum information necessary.</p>
            <p>There are some limits to confidentiality. I may need to share information if:</p>
            <ul>
              <li>I believe there is a serious risk of harm to you or someone else</li>
              <li>there is a safeguarding concern involving a child, vulnerable adult or person at risk</li>
              <li>I am required to do so by law, court order or legal process</li>
              <li>disclosure is necessary to prevent or detect a serious crime</li>
              <li>there is a medical emergency and information is needed to protect life</li>
              <li>I need to consult my clinical supervisor, while protecting your identity as far as possible</li>
            </ul>
            <p>Where possible and appropriate, I would aim to discuss this with you before sharing information. However, I may not be able to do so if this would increase risk, prejudice safeguarding action, undermine the purpose of the disclosure, or would otherwise not be possible.</p>
            <h2>Supervision</h2>
            <p>I use clinical supervision to support safe and effective practice.</p>
            <p>In supervision, I may discuss aspects of client work to support safe and effective practice. I aim to minimise identifying detail where possible and appropriate. However, it may sometimes be possible for a client to be identified from the information discussed. My supervisor is also bound by confidentiality and professional standards.</p>
            <h2>Clinical notes and records</h2>
            <p>I keep brief clinical notes to support safe and ethical therapy. These are usually factual, proportionate and relevant to the work.</p>
            <p>Clinical records may include:</p>
            <ul>
              <li>session dates</li>
              <li>brief themes discussed</li>
              <li>relevant risk, safeguarding or clinical information</li>
              <li>agreed actions or important decisions</li>
              <li>contact and administrative information</li>
            </ul>
            <p>I do not keep a full transcript of sessions.</p>
            <h2>How long I keep information</h2>
            <p>I keep information only for as long as necessary for the purpose for which it was collected. Retention periods may vary depending on the type of record, the nature of the work, legal and professional requirements, and whether the work involved a child or young person. As a general guide:</p>
            <ul>
              <li>enquiry information may be deleted if we do not begin therapy, usually within 6-12 months.</li>
              <li>client records may be kept for seven years after therapy ends</li>
              <li>Where therapy involves a child or young person, records may be retained until the client's 25th birthday, or longer where necessary for safeguarding, legal or insurance purposes.</li>
              <li>financial records may be kept for the period required for tax and accounting purposes</li>
              <li>emails, messages and administrative records are reviewed periodically and deleted when no longer needed</li>
            </ul>
            <p>There may be times when I need to keep records for longer, for example where there are safeguarding, legal, insurance, complaint-related or professional-body reasons. I keep my retention periods under review and aim to make sure they remain justified and proportionate.</p>
            <h2>Where your information is stored</h2>
            <p>Your information may be stored in the following systems:</p>
            <ul>
              <li>Website and contact form: The website is hosted by Netlify and Contact-form messages are sent using EmailJS.</li>
              <li>Email: Alison’s email account is provided by Google.</li>
            </ul>
            <ul>
              <li>Practice management or client records: Client records and clinical notes are stored on Google drive.</li>
              <li>Online sessions: These are hosted through Google meet.</li>
              <li>Payments / invoicing: Bank Transfers are made through to Alison’s Nationwide banking account. Card Payments are made and processed through SumUp</li>
              <li>Phone / messages: Alison’s Telephone, SMS and WhatsApp messaging is delivered through Three Mobile.</li>
            </ul>
            <p>I use appropriate technical and organisational measures to keep information secure. This may include password protection, device security, two-factor authentication, restricted access and secure storage.</p>
            <p>Where I use external providers, they may process data on my behalf. I aim to use reputable providers with appropriate data protection and security arrangements. Some of these providers may store or process personal information outside the UK. Where this happens, I will seek to ensure that appropriate safeguards are in place in accordance with UK data protection law; alternatively, you can see each provider’s privacy information for details.</p>
            <h2>Online therapy</h2>
            <p>If we work online, sessions will take place using Google Meet. I will take reasonable steps to protect confidentiality from my side, and I ask that you also choose a private space where you cannot easily be overheard or interrupted.</p>
            <p>Online platforms may process technical information such as IP address, device information or connection data. Please also check the privacy notice of the platform we use if you would like more detail.</p>
            <h2>Website visitors and cookies</h2>
            <p>When you visit <a href="https://www.alisondaytherapy.com" target="_blank" rel="noreferrer">www.alisondaytherapy.com</a> some technical information may be collected automatically, such as your IP address, device type, browser type, pages visited and the time of your visit. This may happen through website hosting, security, analytics or cookie tools.</p>
            <p>My website is hosted by Netlify. The website may use cookies or similar technologies to make the site work, improve performance, understand visitor behaviour or support security.</p>
            <p>You can usually control cookies through your browser settings. If I use cookies or similar technologies that are not strictly necessary, I will make sure the website provides the level of notice, choice or consent required by law. In some cases, current UK rules may allow limited exemptions for certain analytics or functionality cookies, but only where the legal conditions for those exemptions are met.</p>
            <p>If you accept optional content, the site loads the verification badge from Psychology Today and the Google Map on the Fees page. Those providers may receive technical information such as your IP address and browser details, and may use cookies or similar technologies. Their privacy information explains their processing. Your choice is stored in this browser for six months so the site can remember it. You can change your choice using “Cookie settings” in the footer.</p>
            <h2>Sharing your information</h2>
            <p>I will not share your personal information unless there is a clear reason to do so. Depending on the circumstances, I may share limited information with the following people or organisations where this is necessary, proportionate and lawful:</p>
            <ul>
              <li>my clinical supervisor</li>
              <li>professional advisers, such as an accountant, insurer or legal adviser</li>
              <li>my professional body, if required in relation to a complaint or ethical matter</li>
              <li>safeguarding services, emergency services or your GP, where there is serious risk or safeguarding concern</li>
              <li>a court or legal authority, if required by law</li>
              <li>an appointed clinical executor if I die or become unable to contact clients myself</li>
              <li>trusted digital service providers who process data on my behalf</li>
            </ul>
            <p>Where I share information, I aim to share only what is relevant and necessary for that purpose. If I or one of my providers transfers personal information outside the UK to a separate organisation, I will only do so where the law allows it and an appropriate transfer mechanism or other safeguard is in place where required.</p>
            <h2>Clinical will</h2>
            <p>I aim to have arrangements in place so that clients can be contacted if I die or become seriously incapacitated.</p>
            <p>This may involve a trusted professional colleague or clinical executor having access to the minimum information needed to contact current clients and manage records appropriately. That person would be bound by confidentiality, would only access information if necessary, and would not take on an ongoing therapeutic role unless separately agreed and appropriate.</p>
            <h2>Your rights</h2>
            <p>Under UK data protection law, you have rights over your personal information. These may include the right to:</p>
            <ul>
              <li>be informed about how your data is used</li>
              <li>access a copy of your personal information</li>
              <li>ask for inaccurate information to be corrected</li>
              <li>ask for personal information to be deleted where the legal conditions for erasure apply</li>
              <li>restrict or object to certain processing</li>
              <li>request data portability where the legal conditions are met</li>
              <li>challenge solely automated decision-making, including profiling, where applicable</li>
              <li>withdraw consent where processing genuinely relies on consent.</li>
              <li>complain about how your information has been handled</li>
            </ul>
            <p>Some rights are not absolute and may depend on the circumstances. For example, I may need to keep some information for legal, professional, safeguarding, insurance or complaint-related reasons, and there may be limits on what can be disclosed where information includes third-party data or where a relevant exemption applies.</p>
            <p>In some circumstances, information may be withheld where an exemption under data protection law applies. For example, where disclosure would reveal information about another person, or where disclosure is likely to cause serious harm to the physical or mental health of any individual.</p>
            <p>If you would like to exercise your rights, please contact me using the details above. I will respond to a request about your rights within one month. If a request is particularly complex, or if I need to consider whether any restriction or exemption applies, I may need longer, in which case I will let you know.</p>
            <h2>Data protection concerns and complaints</h2>
            <p>If you have a concern about how I have handled your personal information, you can make a data protection complaint by contacting me using the details in this notice. I will acknowledge your complaint as soon as reasonably possible and investigate it without undue delay.</p>
            <p>Please include:</p>
            <ul>
              <li>your name</li>
              <li>what your concern is about</li>
              <li>what you would like me to investigate</li>
              <li>how you would prefer me to respond</li>
            </ul>
            <p>I will investigate your complaint as appropriate, keep you informed where necessary, and tell you the outcome without undue delay.</p>
            <p>If you are not satisfied with my response, or if you would prefer to contact the UK regulator directly, you can contact the Information Commissioner’s Office:</p>
            <p>Information Commissioner’s Office Website: <a href="https://www.ico.org.uk" target="_blank" rel="noreferrer">www.ico.org.uk</a>; telephone: 0303 123 1113</p>
            <h2>Data Security Incidents</h2>
            <p>While I take appropriate steps to protect personal information, no method of storage or transmission can be guaranteed to be completely secure. If a personal data breach occurs that is likely to result in a risk to your rights and freedoms, I will take appropriate action in accordance with UK data protection law, including notifying the Information Commissioner's Office and affected individuals where required.</p>
            <h2>Changes to this privacy notice</h2>
            <p>I may update this privacy notice from time to time to reflect changes in my practice, legal requirements, professional guidance or the systems I use.</p>
            <p>The latest version will be available on my website</p>
          `;

export function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Notice | Alison Day Psychotherapy</title>
        <meta name="description" content="How Alison Day Psychotherapy collects, uses and protects personal information." />
        <link rel="canonical" href="https://www.alisondaytherapy.com/privacy" />
      </Helmet>
      <section className="page-section content-page privacy-page">
        <Banner />
        <div className="container relative content-card">
          <h1 className="section-title">Privacy notice</h1>
          <div className="page-copy" dangerouslySetInnerHTML={{ __html: policyHtml }} />
        </div>
      </section>
    </>
  );
}
