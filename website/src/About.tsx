

import headshot from "./assets/headshot.jpg"

export function About() {
    return (<section className='page-section'>
    
              <h1 id='about' className='section-title'>About</h1>
              <div className='container relative' style={{ display: "flex", flexDirection: "column", placeItems: 'center' }}>
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
            </section>)
}