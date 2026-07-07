import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: './',
  server: {
    proxy: {
      '/api': { target: 'http://saonelocal.webhop.me', changeOrigin: true },
      '/login': 'http://saonelocal.webhop.me',
      '/signup': 'http://saonelocal.webhop.me',
      '/signup-producer': 'http://saonelocal.webhop.me'
    }
  }
})