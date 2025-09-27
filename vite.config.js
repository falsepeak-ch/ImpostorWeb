import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'how-to-play': resolve(__dirname, 'how-to-play.html')
      },
      output: {
        // Optimize asset naming for caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const extType = info[info.length - 1]

          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`
          }
          if (/css/i.test(extType)) {
            return `assets/css/[name]-[hash][extname]`
          }
          if (/js/i.test(extType)) {
            return `assets/js/[name]-[hash][extname]`
          }
          if (/ttf|woff|woff2|eot/i.test(extType)) {
            return `assets/fonts/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000
  },

  // Development server
  server: {
    port: 3000,
    open: true,
    host: true
  },

  // Asset handling
  assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2'],

  // CSS processing
  css: {
    devSourcemap: true
  },

  // Preview server (for testing production build)
  preview: {
    port: 4173,
    open: true,
    host: true
  }
})