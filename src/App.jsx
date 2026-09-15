import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import AboutUs from './components/AboutUs.jsx'
import ProductList from './components/ProductList.jsx'
import CartItem from './components/CartItem.jsx'
import './App.css'

function LandingPage() {
  return (
    <main className="hero">
      <div className="hero__art" aria-hidden="true">
        <svg viewBox="0 0 480 640" preserveAspectRatio="xMidYMid slice">
          <path d="M240 640 C240 480 240 360 240 240" stroke="#3F6B4A" strokeWidth="4" fill="none" />
          <path d="M240 420 C160 400 100 330 90 240 C190 250 250 320 240 420 Z" fill="#2E4B33" />
          <path d="M240 380 C330 355 390 280 400 190 C300 205 235 280 240 380 Z" fill="#375A38" />
          <path d="M240 300 C180 270 150 210 155 140 C230 160 260 220 240 300 Z" fill="#4E6E4A" />
          <path d="M240 260 C300 235 335 180 335 115 C270 130 235 185 240 260 Z" fill="#6B8F5C" />
          <path d="M240 640 C220 560 175 520 100 505" stroke="#3F6B4A" strokeWidth="3" fill="none" opacity="0.6" />
          <path d="M240 640 C265 555 320 520 395 512" stroke="#3F6B4A" strokeWidth="3" fill="none" opacity="0.6" />
          <circle cx="90" cy="240" r="6" fill="#D8B44E" />
          <circle cx="400" cy="190" r="5" fill="#D8B44E" />
          <circle cx="155" cy="140" r="4" fill="#D8B44E" />
        </svg>
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">Houseplants, greenhouse to doorstep</p>
        <h1 className="hero__title">Paradise Nursery</h1>
        <AboutUs />
        <Link to="/products" className="button button--primary hero__cta">
          Get Started
        </Link>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  )
}
