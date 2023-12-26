import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://braviasystems.000webhostapp.com/apps/licoreria-jankot/licoreria-jankot/', // Reemplaza con la ruta base de tu aplicación
  plugins: [react()],
})
