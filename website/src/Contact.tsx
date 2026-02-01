import React from "react";
import emailjs from '@emailjs/browser';

export function Contact() {
    const form = React.useRef<HTMLFormElement | null>(null);

    const [contactResult, setContactResult] = React.useState<{ success: boolean, message: string | undefined } | undefined>(undefined);

    const onClick = (e: React.FormEvent) => {
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

    return (<section id="contact" className='page-section'   style={{  background: "linear-gradient(180deg, #f1f2f3 0%, #e1e7eeb9 100%)",



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
                            07711111111 TBC
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
                <form className="form contact-form" id="contact_form" ref={form}>
                    <div className="clearfix">

                        <div className="cf-left-col">

                            <div className="form-group">
                                <input type="text" name="name" id="name" className="input-md round form-control" placeholder="Name" pattern="^[A-Za-z][A-Za-z\s'-]{1,99}$" aria-required="true" />
                            </div>

                            <div className="form-group">
                                <input type="email" name="email" id="email" className="input-md round form-control" placeholder="Email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$" aria-required="true" />
                            </div>
                        </div>

                        <div className="cf-right-col">
                            <div className="form-group">
                                <textarea name="message" id="message" className="input-md round form-control" style={{ minHeight: 250 }} placeholder="Message"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix">

                        <div className="cf-left-col">
                            <div className="form-tip pt-20">
                                <i className="fa fa-info-circle" aria-hidden="true"></i> All the fields are required
                            </div>
                        </div>
                        <div className="cf-right-col">
                            <div className="align-right pt-10">
                                <button className="submit_btn btn-w btn-mod btn-medium btn-round" id="submit_btn" aria-controls="result" onClick={onClick}>Submit Message</button>
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