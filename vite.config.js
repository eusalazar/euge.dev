import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/euge.dev/',
  build: {
    outDir: 'dist', // Directory to output build files
    assetsDir: 'assets', // Directory for static assets (like images, JS files, etc.)
    rollupOptions: {
      input: {
        main: 'index.html', // Main entry point for your app
      },
      output: {
        entryFileNames: 'assets/[name].[hash].js', // Include hash in filenames for caching
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
})
