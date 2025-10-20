# Google Search Console Verification Instructions

## Step 1: Set Up Google Search Console

1. Go to: https://search.google.com/search-console/welcome
2. Click **"Add property"**
3. Choose **"URL prefix"** method
4. Enter your domain: `https://falsepeak.ch/cluso` or `https://impostor-ffbfc.web.app`
5. Click **Continue**

## Step 2: Choose HTML File Verification Method

1. Select **"HTML file"** verification method
2. Download the verification file (named something like `googleXXXXXXXXXXXX.html`)
3. Place this file in the root of your project folder
4. Add it to vite.config.js so it gets copied to dist/

## Step 3: Update vite.config.js

Add the Google verification file to the `closeBundle()` function:

```javascript
closeBundle() {
  copyFileSync('sitemap.xml', 'dist/sitemap.xml')
  copyFileSync('robots.txt', 'dist/robots.txt')
  copyFileSync('manifest.json', 'dist/manifest.json')
  copyFileSync('.htaccess', 'dist/.htaccess')
  copyFileSync('index-redirect.html', 'dist/index.html')
  copyFileSync('googleXXXXXXXXXXXX.html', 'dist/googleXXXXXXXXXXXX.html') // Add this line
  console.log('✅ Copied SEO files to dist/')
}
```

## Step 4: Build and Deploy

```bash
npm run build
firebase deploy --only hosting
```

## Step 5: Verify Ownership in Google Search Console

1. Go back to Google Search Console
2. Click **"Verify"** button
3. Wait for confirmation

## Step 6: Submit Sitemap

Once verified:

1. In Google Search Console, go to **Sitemaps** (left sidebar)
2. Enter: `sitemap.xml`
3. Click **Submit**

## Step 7: Request Indexing for Important Pages

1. Use the **URL Inspection** tool (top of page)
2. Enter these URLs and click "Request Indexing":
   - `https://falsepeak.ch/cluso/en/`
   - `https://falsepeak.ch/cluso/en/blog/`
   - `https://falsepeak.ch/cluso/en/blog/best-offline-party-games.html`
   - `https://falsepeak.ch/cluso/en/blog/how-to-host-game-night.html`
   - `https://falsepeak.ch/cluso/en/blog/social-deduction-games-explained.html`
   - `https://falsepeak.ch/cluso/en/rules.html`

Repeat for other important language pages if needed.

## Expected Timeline

- **Verification**: Instant
- **Sitemap processing**: 1-2 days
- **Initial indexing**: 2-7 days
- **Full indexing**: 1-4 weeks

## Check Indexing Status

Search Google for: `site:falsepeak.ch/cluso`

This will show all indexed pages from your site.

## Alternative: Meta Tag Verification

If you prefer, you can use meta tag verification instead:

1. Choose **"HTML tag"** method in Search Console
2. Copy the meta tag they provide
3. Add it to the `<head>` section of your pages in build-i18n.js

Example:
```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
```

This goes in every page template in build-i18n.js.
