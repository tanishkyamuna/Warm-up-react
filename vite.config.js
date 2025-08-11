import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // IMPORTANT: Set the correct base path for GitHub Pages project site
  // If deploying to https://<user>.github.io/Warm-up-react/
  base: '/Warm-up-react/',
  plugins: [react(), tailwindcss()],
})
