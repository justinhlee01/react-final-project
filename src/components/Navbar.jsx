import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTotalQuantity } from '../redux/CartSlice.jsx'
import './Navbar.css'

export default function Navbar() {
  const totalQuantity = useSelector(selectTotalQuantity)

  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__brand">
        <span className="navbar__brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M12 21c0-6 4-9 4-14a4 4 0 0 0-8 0c0 5 4 8 4 14Z" />
          </svg>
        </span>
        Paradise Nursery
      </NavLink>

      <nav className="navbar__links" aria-label="Primary">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'is-active' : '')}>
          Home
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'is-active' : '')}>
          Plants
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? 'navbar__cart is-active' : 'navbar__cart')}>
          Cart
          <span className="navbar__cart-count">{totalQuantity}</span>
        </NavLink>
      </nav>
    </header>
  )
}
