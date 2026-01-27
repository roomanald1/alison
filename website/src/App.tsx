
import './assets/css/style-responsive.css'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/vertical-rhythm.min.css'
import './assets/css/style.css'
import headshot from "./assets/headshot.jpg"

function App() {
  return (
    <div className='page'>
      <div className='sticky-wrapper'>
        <nav className="main-nav dark sticky small-height">
          <div className="full-wrapper relative clearfix">

            <div className="nav-logo-wrap local-scroll">

              <div className="nav-logo-wrap local-scroll">
                <a href="#top" className="logo small-height" style={{ fontSize: 14 }}>
                  Alison Day
                </a>
              </div>
              <div className="inner-nav desktop-nav">
                <ul className="clearlist scroll-nav local-scroll">
                  <li className="active" ><a href="#home" style={{ lineHeight: 75, height: 75 }} className="">Home</a></li>
                  <li><a href="#about" style={{ lineHeight: 75, height: 75 }} className="">About</a></li>
                  <li><a href="#services" style={{ lineHeight: 75, height: 75 }} className="active" >Services</a></li>
                  <li><a href="#blog" style={{ lineHeight: 75, height: 75 }}>Blog</a></li>
                  <li><a href="#contact" style={{ lineHeight: 75, height: 75 }}>Contact</a></li>
                </ul>
              </div>
            </div>

          </div>
        </nav>
      </div>
      <main id='main'>
        <section className='page-section'>

          <h1 className='section-title'>About</h1>
          <div className='container relative' style={{ display: "flex", flexDirection: "column", placeContent: 'center' }}>
            <img style={{ alignItems: 'center', marginBottom: 20 }} src={headshot} height={250} width={200} />
            <section className='section-text'>
              <div className='row'>
                <div className='col-md-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.

                </div>
                <div className='col-md-4'>
                  Etiam sit amet fringilla lacus. Pellentesque suscippiteme ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero. Donec vel ultricies purus. Nam dictum sem, eu aliquam.
                </div>
                <div className='col-md-4'>
                  Maecenas volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum volutpat nibh, accumsan purus. Lorem ipsum dolor sit semper amet, consectetur adipiscing elit. In maximus ligula metus pellentesque mattis.
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className='page-section bg-gray-lighter '>
          
          <div className='container relative'>
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
        </section>
      </main>
    </div>
  )
}

export default App
