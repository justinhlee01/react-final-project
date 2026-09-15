import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [], // { id, name, price, icon, accent, quantity }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Adds a plant the first time it's added; a plant already in the cart
    // is left untouched here (quantity changes go through increment/decrement).
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
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },
  },
})

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions

// Selectors
export const selectCartItems = (state) => state.cart.items
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
export const selectTotalCost = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0)

export default cartSlice.reducer
