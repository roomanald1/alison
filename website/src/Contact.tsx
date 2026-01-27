export function Contact() {
    return (<section id="contact" className='page-section bg-gray-lighter '>
          <div className='container relative'>
              <div className='section-title'>CONTACT</div>
          <div className='row'>
            <div className='col-sm-6'>
              <div className='contact-item'>
                <div className='ci-title'>
                  CALL
                </div>
                <div className='ci-text'>
                  07712217817
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='contact-item'>
                <div className='ci-title'>
                  email
                </div>
                <div className='ci-text'>
                  alison@abc.com
                </div>
              </div>
            </div>
          </div>
            <div className='row'>
              <form className="form contact-form" id="contact_form">
                <div className="clearfix">

                  <div className="cf-left-col">

                    <div className="form-group">
                      <input type="text" name="name" id="name" className="input-md round form-control" placeholder="Name" pattern=".{3,100}" aria-required="true" />
                    </div>

                    <div className="form-group">
                      <input type="email" name="email" id="email" className="input-md round form-control" placeholder="Email" pattern=".{5,100}" aria-required="true" />
                    </div>
                  </div>

                  <div className="cf-right-col">
                    <div className="form-group">
                      <textarea name="message" id="message" className="input-md round form-control" placeholder="Message"></textarea>
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
                      <button className="submit_btn btn-w btn-mod btn-medium btn-round" id="submit_btn" aria-controls="result">Submit Message</button>
                    </div>
                  </div>
                </div>
                <div id="result" role="region" aria-live="polite" aria-atomic="true"></div>
              </form>
            </div>
          </div>
        </section>)
}