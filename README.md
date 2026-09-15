# Paradise Nursery

**Paradise Nursery** is a React + Redux shopping cart application for an
online houseplant shop. It was built as the final project for a
front-end web development course covering component-based UI, client-side
routing, and global state management with Redux Toolkit.

## What it does

- **Landing page** — company name, a paragraph about Paradise Nursery, and a
  "Get Started" button that leads into the catalog.
- **Product listing page** — 18 houseplants organized into three categories
  (Air-Purifying Plants, Aromatic Plants, Low-Maintenance Succulents), each
  with a thumbnail, name, price, and an "Add to Cart" button that disables
  itself once the plant is in the cart.
- **Shopping cart page** — every plant type in the cart with its thumbnail,
  unit price, and line total; quantity increase/decrease controls; a
  per-item delete button; a running total item count and total cost; a
  "Continue Shopping" button back to the catalog; and a "Checkout" button
  that shows a "coming soon" message.
- A navigation bar on every page with a live cart-count badge.

## Tech stack

- React 19 + Vite
- React Router (client-side routing between the three pages)
- Redux Toolkit + React-Redux (cart state: add, remove, increment, decrement)
- Plain CSS with a small design-token system (no UI framework)

## Project structure

```
src/
  App.jsx                 # Landing page + route definitions
  App.css                 # Landing page styles (incl. background image)
  index.css               # Global reset, fonts, color/type tokens
  components/
    AboutUs.jsx            # Company description used on the landing page
    Navbar.jsx / .css      # Shared header with live cart count
    ProductList.jsx / .css # Product listing page, grouped by category
    CartItem.jsx / .css    # Shopping cart page
    PlantIcon.jsx          # Custom inline SVG icon set for thumbnails
  redux/
    CartSlice.jsx          # Redux slice: addItem, removeItem,
                            #   incrementQuantity, decrementQuantity
    store.js                # Redux store configuration
  data/
    plants.js               # Plant catalog (name, price, category, etc.)
```

## Running locally

```bash
npm install
npm run dev
```

## Deploying to GitHub Pages

1. Push this project to a public GitHub repository.
2. In `vite.config.js`, set `base` to `/<your-repo-name>/`.
3. In `package.json`, set `homepage` to
   `https://<your-github-username>.github.io/<your-repo-name>`.
4. Run:

   ```bash
   npm run deploy
   ```

   This builds the app and publishes the `dist/` folder to the `gh-pages`
   branch using the `gh-pages` package. Enable GitHub Pages for that branch
   under the repository's Settings → Pages.
