import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: {
      // During local development, point the package name to the source files
      '@react-ts-ui-lib/ui': path.resolve(__dirname, '../../library/ui/src/index.ts'),
      '@react-ts-ui-lib/utilities': path.resolve(__dirname, '../../library/utilities/index.ts'),
    },
  },
})
