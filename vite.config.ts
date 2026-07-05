import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // context/ holds old reference repos (with their own HTML/bundles) that
  // must not be crawled as part of this project's dev server or build.
  optimizeDeps: {
    entries: ['index.html'],
  },
  server: {
    watch: {
      ignored: ['**/context/**'],
    },
  },
})
