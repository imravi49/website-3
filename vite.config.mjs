import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Works both locally and on Netlify
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  base: './'
})
