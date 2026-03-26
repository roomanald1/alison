export function Navigation() {
    return (<div className='sticky-wrapper'>
        <nav className="main-nav stick-fixed small-height">
            <div className="full-wrapper relative clearfix">

    
                    <div className="nav-logo-wrap local-scroll">
                        <a href="/" className="logo small-height" style={{ fontSize: 11 }}>
                            Alison Day
                        </a>
                    </div>
                    <div className="mobile-nav small-height" role="button">
                        <i className="fa fa-bars"></i>
                        <span className="sr-only">Menu</span>
                    </div>
                    <div className="inner-nav desktop-nav">
                        <ul className="clearlist scroll-nav local-scroll">
                            <li><a href="/" style={{ lineHeight: 75, height: 75 }} >Home</a></li>
                            <li><a href="/about" style={{ lineHeight: 75, height: 75 }} >About</a></li>
                            <li><a href="/services" style={{ lineHeight: 75, height: 75 }}>How I work</a></li>
                            <li><a href="/fees" style={{ lineHeight: 75, height: 75 }}>Fees</a></li>
                           {/*  <li><a href="/blog" style={{ lineHeight: 75, height: 75 }}>Blog</a></li> */}
                            <li><a href="/contact" style={{ lineHeight: 75, height: 75 }}>Contact</a></li>
                        </ul>
                    </div>
                </div>

        </nav>
    </div>)
}