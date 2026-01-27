export function Navigation() {
     return (<div className='sticky-wrapper'>
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
                  <li className="active" ><a href="/#home" style={{ lineHeight: 75, height: 75 }} className="">Home</a></li>
                  <li><a href="/#about" style={{ lineHeight: 75, height: 75 }} className="">About</a></li>
                  <li><a href="/#services" style={{ lineHeight: 75, height: 75 }} className="active" >Services</a></li>
                  <li><a href="/#blog" style={{ lineHeight: 75, height: 75 }}>Blog</a></li>
                  <li><a href="/#contact" style={{ lineHeight: 75, height: 75 }}>Contact</a></li>
                </ul>
              </div>
            </div>

          </div>
        </nav>
      </div>)
}