import { fileURLToPath, URL } from 'url'
const markdownRawPlugin = require('vite-raw-plugin')

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    markdownRawPlugin({
      fileRegex: /\.md$/
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
