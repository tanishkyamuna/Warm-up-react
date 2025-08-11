import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // On Vercel, serve from root ('/'). For GitHub Pages project site, use '/Warm-up-react/'.
  // Vercel sets the VERCEL env var during builds.
  const isVercel = process.env.VERCEL === '1' || process.env.VERCEL === 'true'

  return {
    base: isVercel ? '/' : '/Warm-up-react/',
    plugins: [react(), tailwindcss()],
  }
})
