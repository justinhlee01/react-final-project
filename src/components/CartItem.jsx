import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  selectCartItems,
  selectTotalCost,
  selectTotalQuantity,
} from '../redux/CartSlice.jsx'
import PlantIcon from './PlantIcon.jsx'
import './CartItem.css'

function CartRow({ item, onIncrement, onDecrement, onRemove }) {
  const lineTotal = item.price * item.quantity

  return (
    <li className="cart-row">
      <div className="cart-row__thumb" style={{ background: `${item.accent}1a` }}>
        <PlantIcon icon={item.icon} accent={item.accent} className="cart-row__icon" />
      </div>

      <div className="cart-row__info">
        <h3>{item.name}</h3>
        <p className="cart-row__unit">${item.price.toFixed(2)} each</p>
      </div>

      <div className="cart-row__quantity">
        <button
          type="button"
          className="stepper__button"
          onClick={() => onDecrement(item.id)}
          disabled={item.quantity <= 1}
          aria-label={`Decrease quantity of ${item.name}`}
        >
          −
        </button>
        <span className="stepper__value">{item.quantity}</span>
        <button
          type="button"
          className="stepper__button"
          onClick={() => onIncrement(item.id)}
          aria-label={`Increase quantity of ${item.name}`}
        >
          +
        </button>
      </div>

      <span className="cart-row__total">${lineTotal.toFixed(2)}</span>

      <button
        type="button"
        className="cart-row__delete"
        onClick={() => onRemove(item.id)}
        aria-label={`Remove ${item.name} from cart`}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 7h12M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-8 0v13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7" />
        </svg>
      </button>
    </li>
  )
}

export default function CartItem() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const totalQuantity = useSelector(selectTotalQuantity)
  const totalCost = useSelector(selectTotalCost)
  const [showComingSoon, setShowComingSoon] = useState(false)

  if (cartItems.length === 0) {
    return (
      <main className="cart cart--empty">
        <h1>Your basket is empty</h1>
        <p>Nothing potted up yet — browse the collection to find something green.</p>
        <Link to="/products" className="button button--primary">
          Continue Shopping
        </Link>
      </main>
    )
  }

  return (
    <main className="cart">
      <div className="cart__summary">
        <div>
          <h1>Your basket</h1>
          <p>
            {totalQuantity} {totalQuantity === 1 ? 'plant' : 'plants'} ready for checkout
          </p>
        </div>
        <span className="cart__summary-total">${totalCost.toFixed(2)}</span>
      </div>

      <ul className="cart__list">
        {cartItems.map((item) => (
          <CartRow
            key={item.id}
            item={item}
            onIncrement={(id) => dispatch(incrementQuantity(id))}
            onDecrement={(id) => dispatch(decrementQuantity(id))}
            onRemove={(id) => dispatch(removeItem(id))}
          />
        ))}
      </ul>

      <div className="cart__actions">
        <Link to="/products" className="button button--outline">
          Continue Shopping
        </Link>
        <div className="cart__checkout">
          {showComingSoon && <span className="cart__checkout-note">Checkout is coming soon.</span>}
          <button type="button" className="button button--primary" onClick={() => setShowComingSoon(true)}>
            Checkout
          </button>
        </div>
      </div>
    </main>
  )
}
