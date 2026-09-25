import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { portfolioSchema, masterclassSchema } from './src/seo/structuredData.js'

// Adds each page's JSON-LD to its <head> so it ships in the static HTML
function structuredData() {
  return {
    name: 'structured-data',
    transformIndexHtml(html, ctx) {
      const schema = ctx.path.startsWith('/ai-masterclass') ? masterclassSchema : portfolioSchema
      return [{ tag: 'script', attrs: { type: 'application/ld+json' }, children: JSON.stringify(schema), injectTo: 'head' }]
    },
  }
}

export default defineConfig({
  plugins: [react(), structuredData()],
  build: {
    rollupOptions: {
      // Each page gets its own HTML so its SEO tags are in the static markup
      input: {
        main: resolve(__dirname, 'index.html'),
        masterclass: resolve(__dirname, 'ai-masterclass/index.html'),
      },
    },
  },
})
