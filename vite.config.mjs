import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  root: '.',              // Root of project
  publicDir: 'public',    // Folder for public assets
  build: {
    outDir: 'dist',       // Build output folder
    rollupOptions: {
      input: resolve(__dirname, 'public/index.html')
    }
  },
  server: {
    port: 5173,
    open: true
  }
})
