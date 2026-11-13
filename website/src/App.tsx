
import './assets/css/style-responsive.css'
import './assets/css/bootstrap.min.css'
import './assets/css/vertical-rhythm.min.css'
import './assets/css/style.css'
import './assets/css/magnific-popup.css'
import './assets/css/theme-variables.css'
import './assets/css/buttons.css'
import './assets/css/forms.css'
import './assets/css/navigation.css'
import './assets/css/site-polish.css'

import { Navigation } from './Navigation'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { BlogPost } from './BlogPost'
import { BlogsList } from './BlogsList'
import { Contact } from './Contact'
import type { JSX } from 'react/jsx-runtime'
import { About } from './About'
import { Services } from './Services'
import { Fees } from './Fees'
import { ContactPage } from './ContactPage'
import { PrivacyPage } from './PrivacyPage'
import { CookieConsentBanner, CookieConsentProvider, CookieSettingsButton } from './CookieConsent'
import { NotFoundPage } from './NotFoundPage'
import { getBlogRoutePaths } from './BlogsList'
function App() {


  return (
    <CookieConsentProvider>
    <div className='page'>
      <Navigation />
      <main id='main'>
        <Routes>
          <Route path="/" element={with_contact(<Home />)} />
          <Route path="/blog" element={with_contact(<BlogsList is_dark={false} number_of_items={"all"} />)} />
          {getBlogRoutePaths().map(path => <Route key={path} path={path} element={with_contact(<BlogPost />)} />)}
          <Route path="/about" element={with_contact(<About />)} />
          <Route path="/services" element={with_contact(<Services />)} />
          <Route path="/fees" element={with_contact(<Fees />)} />
          <Route path="/contact" element={with_contact(<ContactPage />)} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer className="site-footer"><div className="container"><span>Alison Day Psychotherapy</span><div className="site-footer-links"><a href="/privacy">Privacy notice</a><CookieSettingsButton /></div></div></footer>
      <CookieConsentBanner />
    </div>
    </CookieConsentProvider>
  )
}

function with_contact(element: JSX.Element) {
  return (<>
    {element}
    <Contact />
  </>)
}


export default App
