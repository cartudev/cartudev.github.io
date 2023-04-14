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
          projects: resolve(__dirname, 'projects.html'),
          contact: resolve(__dirname, 'contact.html'),
        },
      },
    },
  })