import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: './',
  server: {
    proxy: {
      '/api': { target: 'http://localhost:3000', changeOrigin: true },
      '/login': 'http://localhost:3000',
      '/signup': 'http://localhost:3000',
      '/signup-producer': 'http://localhost:3000'
    }
  }
})
