import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Counter-React-Bootstrap/',  // ← ADD THIS
  plugins: [react()]
})
