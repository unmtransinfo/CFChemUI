import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cfhem/',
  plugins: [react()],
  server: {
    host: true,
    port: 5000
  }
})
