import React from "react";
import emailjs from '@emailjs/browser';
import { PsychologyTodayBadge } from './PsychologyTodayBadge';

export function Contact() {
    const form = React.useRef<HTMLFormElement | null>(null);

    const [contactResult, setContactResult] = React.useState<{ success: boolean, message: string | undefined } | undefined>(undefined);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.current) {
            emailjs.sendForm('service_zqdaf8t', 'template_fkgktde', form.current, 'q5OrP3w__HT0d1qpI').then(() => {
                setContactResult({ success: true, message: "Message sent successfully" })
                form.current?.reset();
            }, (err) => {
                console.log(err)
                setContactResult({ success: false, message: "Failed to send message" })
            });
        }
    }

    return (<section id="contact" className='page-section' style={{
        borderTop: "1px solid var(--brand-color)",
        background: "linear-gradient(180deg, var(--brand-color2) 0%, var(--brand-color4) 100%)",
    }} >
        <div className='container relative'>
            <div className='section-title'>GET IN TOUCH</div>
            <div className='row'>
                <div className='col-sm-6'>
                    <div className='contact-item'>
                        <div className='ci-title'>
                            CALL
                        </div>
                        <div className='ci-text'>
                            07445 316 482
                        </div>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='contact-item'>
                        <div className='ci-title'>
                            email
                        </div>
                        <div className='ci-text'>
                            <a href="mailto:alisondaypsychotherapy@gmail.com">alisondaypsychotherapy@gmail.com</a>
                        </div>
                    </div>
                </div>


            </div>
            <div className='row'>
                <form className="form contact-form" id="contact_form" ref={form} onSubmit={onSubmit}>
                    <div className="clearfix">

                        <div className="cf-left-col">

                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" className="input-md round form-control" placeholder="Your name" pattern="^[A-Za-z][A-Za-z\s'-]{1,99}$" aria-required="true" required />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" className="input-md round form-control" placeholder="Your email address" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$" aria-required="true" required />
                            </div>

                            <div className="form-group seal-row">
                                <img className="bacp-logo" src="/bacp.png" alt="BACP" />
                                <PsychologyTodayBadge />
                            </div>

                        </div>

                        <div className="cf-right-col">
                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Message</label>
                                <textarea name="message" id="message" className="input-md round form-control" style={{ minHeight: 250 }} placeholder="Write your message" aria-required="true" required></textarea>
                            </div>
                        </div>
                    </div>
                    <p className="contact-privacy-note">Please keep your message brief and avoid detailed health or sensitive information. See the <a href="/privacy">privacy notice</a> for how enquiries are handled.</p>
                    <div className="clearfix">

                        <div className="cf-left-col">
                            <div className="form-tip pt-20">
                                <span className="form-info-icon" aria-hidden="true">i</span> All the fields are required
                            </div>
                        </div>
                        <div className="cf-right-col">
                            <div className="align-right pt-10">
                                <button type="submit" className="submit_btn btn-w btn-mod btn-medium btn-round" id="submit_btn" aria-controls="result">Submit Message</button>
                            </div>
                        </div>
                    </div>
                    <div id="result" role="region" aria-live="polite" aria-atomic="true"></div>
                    {contactResult && <div style={{ color: contactResult.success ? "darkgreen" : "darkred" }}>{contactResult.message}</div>}
                </form>
            </div>
        </div>
    </section>)
}
