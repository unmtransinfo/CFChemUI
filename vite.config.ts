import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cfchem/',
  plugins: [react()],
  server: {
    host: true,
    port: 5000
  }
})
