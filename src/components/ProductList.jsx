import { useDispatch, useSelector } from 'react-redux'
import { categories, plants } from '../data/plants.js'
import { addItem, selectCartItems } from '../redux/CartSlice.jsx'
import PlantIcon from './PlantIcon.jsx'
import './ProductList.css'

function ProductCard({ plant, isInCart, onAdd }) {
  return (
    <li className="plant-card">
      <div className="plant-card__thumb" style={{ background: `${plant.accent}1a` }}>
        <PlantIcon icon={plant.icon} accent={plant.accent} className="plant-card__icon" />
      </div>
      <div className="plant-card__body">
        <h3 className="plant-card__name">{plant.name}</h3>
        <p className="plant-card__description">{plant.description}</p>
        <div className="plant-card__footer">
          <span className="plant-card__price">${plant.price.toFixed(2)}</span>
          <button
            type="button"
            className="button button--primary plant-card__add"
            onClick={() => onAdd(plant)}
            disabled={isInCart}
          >
            {isInCart ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </li>
  )
}

export default function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const cartIds = new Set(cartItems.map((item) => item.id))

  const handleAdd = (plant) => {
    dispatch(addItem(plant))
  }

  return (
    <main className="catalog">
      <div className="catalog__intro">
        <h1>Shop the collection</h1>
        <p>Eighteen plants across three categories, each potted and shipped from our own greenhouse.</p>
      </div>

      {categories.map((category) => (
        <section key={category.id} className="catalog__section" aria-labelledby={`${category.id}-heading`}>
          <div className="catalog__section-header">
            <h2 id={`${category.id}-heading`}>{category.name}</h2>
            <p>{category.blurb}</p>
          </div>
          <ul className="plant-grid">
            {plants
              .filter((plant) => plant.category === category.id)
              .map((plant) => (
                <ProductCard key={plant.id} plant={plant} isInCart={cartIds.has(plant.id)} onAdd={handleAdd} />
              ))}
          </ul>
        </section>
      ))}
    </main>
  )
}
