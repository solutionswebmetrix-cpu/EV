import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ProductsPage from './pages/ProductsPage'
import TechnologyPage from './pages/TechnologyPage'
import DealershipPage from './pages/DealershipPage'
import GalleryPage from './pages/GalleryPage'
import Contact from './pages/Contact'
import Enquiry from './pages/Enquiry'
import ProductDetail from './pages/ProductDetail'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/dealership" element={<DealershipPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enquiry" element={<Enquiry />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
