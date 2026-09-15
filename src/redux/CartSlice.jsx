import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [], // { id, name, price, icon, accent, quantity }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Adds a plant the first time it's added; a plant already in the cart
    // is left untouched here (quantity changes go through updateQuantity).
    addItem: (state, action) => {
      const plant = action.payload
      const alreadyInCart = state.items.find((item) => item.id === plant.id)
      if (!alreadyInCart) {
        state.items.push({
          id: plant.id,
          name: plant.name,
          price: plant.price,
          icon: plant.icon,
          accent: plant.accent,
          quantity: 1,
        })
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    // payload: { id, amount } — amount is +1 for the increase button and -1
    // for the decrease button. Quantity never drops below 1; use removeItem
    // (the delete button) to take a plant out of the cart entirely.
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload
      const item = state.items.find((item) => item.id === id)
      if (item) {
        item.quantity = Math.max(1, item.quantity + amount)
      }
    },
  },
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions

// Selectors
export const selectCartItems = (state) => state.cart.items
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
export const selectTotalCost = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0)

export default cartSlice.reducer