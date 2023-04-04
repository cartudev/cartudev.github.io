import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    // config options
    assetsInclude: ['./*.pdf'],
    base: './',
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          nested: resolve(__dirname, 'projects.html'),
          nested: resolve(__dirname, 'contact.html'),
        },
      },
    },
  })