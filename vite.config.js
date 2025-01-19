import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Change the base URL to match your repository name
  base: '/',
  build: {
    outDir: 'dist',
    // Ensure the assets are properly named
    assetsDir: 'assets',
    // Generate source maps for debugging
    sourcemap: true
  }
})
