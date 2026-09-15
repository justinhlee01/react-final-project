import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// The base path must match your GitHub repo name for GitHub Pages to load
// assets correctly, e.g. '/paradise-nursery/' for a repo at
// github.com/<you>/paradise-nursery. Update this if you name the repo
// something else, then re-run `npm run deploy`.
export default defineConfig({
  base: '/paradise-nursery/',
  plugins: [react()],
})
