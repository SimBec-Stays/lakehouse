import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/lakehouse/", // repository name
  plugins: [react()],
})