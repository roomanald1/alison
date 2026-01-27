
import './assets/css/style-responsive.css'
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/vertical-rhythm.min.css'
import './assets/css/style.css'
import './assets/css/magnific-popup.css'
import { Navigation } from './Navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { BlogPost } from './BlogPost'
import { BlogsList } from './BlogsList'

function App() {
  return (
    <div className='page'>
      <Navigation />
      <main id='main'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/blogs" element={<BlogsList is_dark={false} number_of_items={100} />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  )
}

export default App
