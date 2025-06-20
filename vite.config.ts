import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/UtibeProtfolio/', // 👈 Add this line (repo name with slashes)
  plugins: [react()],
})
