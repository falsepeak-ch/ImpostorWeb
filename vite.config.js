import { defineConfig } from 'vite'
import { resolve } from 'path'
import { copyFileSync, cpSync } from 'fs'

export default defineConfig({
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      // Copy SEO files and language folders after build
      plugins: [{
        name: 'copy-seo-files',
        closeBundle() {
          copyFileSync('sitemap.xml', 'dist/sitemap.xml')
          copyFileSync('robots.txt', 'dist/robots.txt')
          copyFileSync('manifest.json', 'dist/manifest.json')
          copyFileSync('.htaccess', 'dist/.htaccess')
          copyFileSync('index-redirect.html', 'dist/index.html')
          console.log('✅ Copied SEO files to dist/')
        }
      }],
      input: {
        main: resolve(__dirname, 'index.html'),
        'how-to-play': resolve(__dirname, 'how-to-play.html'),
        // Index pages
        en: resolve(__dirname, 'en/index.html'),
        de: resolve(__dirname, 'de/index.html'),
        es: resolve(__dirname, 'es/index.html'),
        ca: resolve(__dirname, 'ca/index.html'),
        pt: resolve(__dirname, 'pt/index.html'),
        fr: resolve(__dirname, 'fr/index.html'),
        // How to Play pages
        'en-how-to-play': resolve(__dirname, 'en/how-to-play.html'),
        'de-how-to-play': resolve(__dirname, 'de/how-to-play.html'),
        'es-how-to-play': resolve(__dirname, 'es/how-to-play.html'),
        'ca-how-to-play': resolve(__dirname, 'ca/how-to-play.html'),
        'pt-how-to-play': resolve(__dirname, 'pt/how-to-play.html'),
        'fr-how-to-play': resolve(__dirname, 'fr/how-to-play.html'),
        // Rules pages
        'en-rules': resolve(__dirname, 'en/rules.html'),
        'de-rules': resolve(__dirname, 'de/rules.html'),
        'es-rules': resolve(__dirname, 'es/rules.html'),
        'ca-rules': resolve(__dirname, 'ca/rules.html'),
        'pt-rules': resolve(__dirname, 'pt/rules.html'),
        'fr-rules': resolve(__dirname, 'fr/rules.html'),
        // Tips pages
        'en-tips': resolve(__dirname, 'en/tips.html'),
        'de-tips': resolve(__dirname, 'de/tips.html'),
        'es-tips': resolve(__dirname, 'es/tips.html'),
        'ca-tips': resolve(__dirname, 'ca/tips.html'),
        'pt-tips': resolve(__dirname, 'pt/tips.html'),
        'fr-tips': resolve(__dirname, 'fr/tips.html'),
        // Blog index pages
        'en-blog': resolve(__dirname, 'en/blog/index.html'),
        'de-blog': resolve(__dirname, 'de/blog/index.html'),
        'es-blog': resolve(__dirname, 'es/blog/index.html'),
        'ca-blog': resolve(__dirname, 'ca/blog/index.html'),
        'pt-blog': resolve(__dirname, 'pt/blog/index.html'),
        'fr-blog': resolve(__dirname, 'fr/blog/index.html'),
        // Blog articles - Best Offline Party Games
        'en-blog-best-offline-party-games': resolve(__dirname, 'en/blog/best-offline-party-games.html'),
        'de-blog-best-offline-party-games': resolve(__dirname, 'de/blog/best-offline-party-games.html'),
        'es-blog-best-offline-party-games': resolve(__dirname, 'es/blog/best-offline-party-games.html'),
        'ca-blog-best-offline-party-games': resolve(__dirname, 'ca/blog/best-offline-party-games.html'),
        'pt-blog-best-offline-party-games': resolve(__dirname, 'pt/blog/best-offline-party-games.html'),
        'fr-blog-best-offline-party-games': resolve(__dirname, 'fr/blog/best-offline-party-games.html'),
        // Blog articles - How to Host Game Night
        'en-blog-how-to-host-game-night': resolve(__dirname, 'en/blog/how-to-host-game-night.html'),
        'de-blog-how-to-host-game-night': resolve(__dirname, 'de/blog/how-to-host-game-night.html'),
        'es-blog-how-to-host-game-night': resolve(__dirname, 'es/blog/how-to-host-game-night.html'),
        'ca-blog-how-to-host-game-night': resolve(__dirname, 'ca/blog/how-to-host-game-night.html'),
        'pt-blog-how-to-host-game-night': resolve(__dirname, 'pt/blog/how-to-host-game-night.html'),
        'fr-blog-how-to-host-game-night': resolve(__dirname, 'fr/blog/how-to-host-game-night.html'),
        // Blog articles - Social Deduction Games Explained
        'en-blog-social-deduction-games-explained': resolve(__dirname, 'en/blog/social-deduction-games-explained.html'),
        'de-blog-social-deduction-games-explained': resolve(__dirname, 'de/blog/social-deduction-games-explained.html'),
        'es-blog-social-deduction-games-explained': resolve(__dirname, 'es/blog/social-deduction-games-explained.html'),
        'ca-blog-social-deduction-games-explained': resolve(__dirname, 'ca/blog/social-deduction-games-explained.html'),
        'pt-blog-social-deduction-games-explained': resolve(__dirname, 'pt/blog/social-deduction-games-explained.html'),
        'fr-blog-social-deduction-games-explained': resolve(__dirname, 'fr/blog/social-deduction-games-explained.html'),
        // Blog articles - Icebreaker Games for Adults
        'en-blog-icebreaker-games-for-adults': resolve(__dirname, 'en/blog/icebreaker-games-for-adults.html'),
        'de-blog-icebreaker-games-for-adults': resolve(__dirname, 'de/blog/icebreaker-games-for-adults.html'),
        'es-blog-icebreaker-games-for-adults': resolve(__dirname, 'es/blog/icebreaker-games-for-adults.html'),
        'ca-blog-icebreaker-games-for-adults': resolve(__dirname, 'ca/blog/icebreaker-games-for-adults.html'),
        'pt-blog-icebreaker-games-for-adults': resolve(__dirname, 'pt/blog/icebreaker-games-for-adults.html'),
        'fr-blog-icebreaker-games-for-adults': resolve(__dirname, 'fr/blog/icebreaker-games-for-adults.html'),
        // Blog articles - Group Games for Large Parties
        'en-blog-group-games-for-large-parties': resolve(__dirname, 'en/blog/group-games-for-large-parties.html'),
        'de-blog-group-games-for-large-parties': resolve(__dirname, 'de/blog/group-games-for-large-parties.html'),
        'es-blog-group-games-for-large-parties': resolve(__dirname, 'es/blog/group-games-for-large-parties.html'),
        'ca-blog-group-games-for-large-parties': resolve(__dirname, 'ca/blog/group-games-for-large-parties.html'),
        'pt-blog-group-games-for-large-parties': resolve(__dirname, 'pt/blog/group-games-for-large-parties.html'),
        'fr-blog-group-games-for-large-parties': resolve(__dirname, 'fr/blog/group-games-for-large-parties.html')
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