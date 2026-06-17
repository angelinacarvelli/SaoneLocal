import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // On change le port vers 3000 pour éviter les conflits
    hmr: {
      overlay: false, // Désactive la couche d'affichage des erreurs qui peut masquer ton site
    },
  },
})