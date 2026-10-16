import { useState } from "react";

export function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="sticky-wrapper">
            <nav className="main-nav stick-fixed small-height">
                <div className="full-wrapper relative clearfix">
                    <div className="nav-logo-wrap local-scroll">
                        <a href="/" className="logo small-height" style={{ fontSize: 11 }} onClick={closeMenu}>
                            Alison Day
                        </a>
                    </div>
                    <button
                        type="button"
                        className={`mobile-nav small-height${menuOpen ? " is-open" : ""}`}
                        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                        aria-expanded={menuOpen}
                        aria-controls="site-navigation"
                        onClick={() => setMenuOpen(open => !open)}
                    >
                        <span className="menu-icon" aria-hidden="true"><span></span><span></span><span></span></span>
                    </button>
                    <div id="site-navigation" className={`inner-nav desktop-nav${menuOpen ? " is-open" : ""}`}>
                        <ul className="clearlist scroll-nav local-scroll">
                            <li><a href="/" style={{ lineHeight: 75, height: 75 }} onClick={closeMenu}>Home</a></li>
                            <li><a href="/about" style={{ lineHeight: 75, height: 75 }} onClick={closeMenu}>About</a></li>
                            <li><a href="/services" style={{ lineHeight: 75, height: 75 }} onClick={closeMenu}>How I work</a></li>
                            <li><a href="/fees" style={{ lineHeight: 75, height: 75 }} onClick={closeMenu}>Fees</a></li>
                            <li><a href="/contact" style={{ lineHeight: 75, height: 75 }} onClick={closeMenu}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
