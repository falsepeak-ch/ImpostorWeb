import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const languages = ['en', 'de', 'es', 'ca', 'pt', 'fr'];

// Language flags for selector
const languageFlags = {
  en: '🇬🇧',
  de: '🇩🇪',
  es: '🇪🇸',
  ca: '🇨🇦',
  pt: '🇵🇹',
  fr: '🇫🇷'
};

// Generate hreflang links for all languages
function generateHreflangLinks(currentLang, isHomePage = true) {
  const page = isHomePage ? '' : 'how-to-play.html';
  return languages.map(lang => {
    const url = `https://falsepeak.ch/cluso/${lang}/${page}`;
    return `    <link rel="alternate" hreflang="${lang}" href="${url}">`;
  }).join('\n');
}

// Generate complete navigation with links
function generateNavigation(currentLang, currentPage = 'home') {
  const t = JSON.parse(fs.readFileSync(`./translations/${currentLang}.json`, 'utf8'));

  // Determine base path based on current page
  let basePath = './';
  if (currentPage === 'blog-article') {
    basePath = '../';
  }

  // Generate language selector options
  const languageLinks = languages.map(lang => {
    const translation = JSON.parse(fs.readFileSync(`./translations/${lang}.json`, 'utf8'));
    const href = `/${lang}/`;
    const activeClass = lang === currentLang ? ' active' : '';
    return `                <a href="${href}" class="language-option${activeClass}">${languageFlags[lang]} ${translation.langName}</a>`;
  }).join('\n');

  const languageSelector = `<div class="language-selector">
            <button class="language-btn" id="languageBtn" aria-label="Select language" aria-haspopup="true" aria-expanded="false">
                <span class="language-current">🌐 ${t.langName}</span>
                <svg class="language-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41 0L6 4.58 10.59 0 12 1.41l-6 6-6-6z" fill="currentColor"/>
                </svg>
            </button>
            <div class="language-dropdown" id="languageDropdown">
${languageLinks}
            </div>
        </div>`;

  // Navigation links with translations
  const navLinks = `<nav class="nav-links" id="navLinks">
                <a href="${basePath}how-to-play.html" class="nav-link">${t.nav?.howToPlay || 'How to Play'}</a>
                <a href="${basePath}rules.html" class="nav-link">${t.nav?.rules || 'Rules'}</a>
                <a href="${basePath}blog/" class="nav-link">${t.nav?.blog || 'Blog'}</a>
            </nav>`;

  // Mobile menu toggle
  const menuToggle = `<button class="nav-menu-toggle" id="menuToggle" aria-label="Toggle menu">☰</button>`;

  return `        <div class="nav-container">
            <a href="${basePath}" class="nav-logo">
                <img src="/src/assets/images/Icon.png" alt="${t.nav.title}" class="nav-icon">
                <span class="nav-title">${t.nav.title}</span>
            </a>
${menuToggle}
${navLinks}
            <div class="nav-right">
${languageSelector}
            </div>
        </div>`
;
}

// Legacy function for compatibility
function generateLanguageSelector(currentLang) {
  return generateNavigation(currentLang, 'home');
}

// Build index.html for each language
function buildIndexPage(lang) {
  const t = JSON.parse(fs.readFileSync(`./translations/${lang}.json`, 'utf8'));
  const hreflangLinks = generateHreflangLinks(lang, true);
  const langSelector = generateLanguageSelector(lang);

  const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Primary Meta Tags -->
    <title>${t.meta.home.title}</title>
    <meta name="title" content="${t.meta.home.title}">
    <meta name="description" content="${t.meta.home.description}">
    <meta name="keywords" content="${t.meta.home.keywords}">
    <meta name="author" content="False Peak">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://falsepeak.ch/cluso/${lang}/">

    <!-- Hreflang Tags -->
${hreflangLinks}

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://falsepeak.ch/cluso/${lang}/">
    <meta property="og:site_name" content="Cluso">
    <meta property="og:title" content="${t.meta.home.title}">
    <meta property="og:description" content="${t.meta.home.description}">
    <meta property="og:image" content="https://falsepeak.ch/cluso/src/assets/images/Icon.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="1200">
    <meta property="og:image:alt" content="Cluso App Icon">
    <meta property="og:locale" content="${lang}_${lang.toUpperCase()}">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://falsepeak.ch/cluso/${lang}/">
    <meta name="twitter:title" content="${t.meta.home.title}">
    <meta name="twitter:description" content="${t.meta.home.description}">
    <meta name="twitter:image" content="https://falsepeak.ch/cluso/src/assets/images/Icon.png">
    <meta name="twitter:image:alt" content="Cluso App Icon">

    <!-- App Store Meta Tags & Smart Banner -->
    <meta name="apple-itunes-app" content="app-id=6747049428, affiliate-data=pt=127841352&ct=web">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="Cluso">

    <!-- Additional ASO Meta Tags -->
    <meta name="application-name" content="Cluso">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="theme-color" content="#0078CC">

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/src/assets/images/Icon.png">
    <link rel="apple-touch-icon" href="/src/assets/images/Icon.png">
    <link rel="manifest" href="/manifest.json">

    <!-- Preconnect for performance -->
    <link rel="preconnect" href="https://apps.apple.com">
    <link rel="dns-prefetch" href="https://apps.apple.com">

    <!-- CSS -->
    <link rel="stylesheet" href="/src/main.css">

    <!-- Firebase Analytics -->
    <script type="module" src="/src/firebase-init.js"></script>

    <!-- Structured Data (JSON-LD) for SEO -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      "name": "Cluso",
      "applicationCategory": "GameApplication",
      "applicationSubCategory": "Party Game",
      "operatingSystem": "iOS",
      "inLanguage": "${lang}",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Organization",
        "name": "False Peak",
        "url": "https://falsepeak.ch"
      },
      "description": "${t.meta.home.description}",
      "screenshot": "https://falsepeak.ch/cluso/src/assets/images/Screenshots/1.png",
      "downloadUrl": "${t.appStoreUrl}",
      "featureList": [
        "Social deduction game for 3-20 players",
        "${t.halloween.title}",
        "Offline play - No internet required",
        "${t.hero.ratingText}"
      ]
    }
    </script>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "False Peak",
      "url": "https://falsepeak.ch",
      "logo": "https://falsepeak.ch/cluso/src/assets/images/Icon.png",
      "sameAs": []
    }
    </script>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Cluso",
      "url": "https://falsepeak.ch/cluso/${lang}/",
      "inLanguage": "${lang}",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://apps.apple.com/search?term=cluso",
        "query-input": "required name=search_term_string"
      }
    }
    </script>
${t.faq ? `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "${t.faq.questions.whatIs.q}",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "${t.faq.questions.whatIs.a}"
          }
        },
        {
          "@type": "Question",
          "name": "${t.faq.questions.howMany.q}",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "${t.faq.questions.howMany.a}"
          }
        },
        {
          "@type": "Question",
          "name": "${t.faq.questions.offline.q}",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "${t.faq.questions.offline.a}"
          }
        },
        {
          "@type": "Question",
          "name": "${t.faq.questions.devices.q}",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "${t.faq.questions.devices.a}"
          }
        },
        {
          "@type": "Question",
          "name": "${t.faq.questions.free.q}",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "${t.faq.questions.free.a}"
          }
        }
      ]
    }
    </script>
` : ''}
    <!-- Navigation Scripts -->
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        // Language Selector
        const languageBtn = document.getElementById('languageBtn');
        const languageDropdown = document.getElementById('languageDropdown');

        if (languageBtn && languageDropdown) {
            languageBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const isOpen = languageDropdown.classList.contains('show');
                languageDropdown.classList.toggle('show');
                languageBtn.setAttribute('aria-expanded', !isOpen);
            });

            document.addEventListener('click', function() {
                languageDropdown.classList.remove('show');
                languageBtn.setAttribute('aria-expanded', 'false');
            });

            languageDropdown.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                navLinks.classList.toggle('show');
            });

            document.addEventListener('click', function(e) {
                if (!navLinks.contains(e.target) && e.target !== menuToggle) {
                    navLinks.classList.remove('show');
                }
            });
        }
    });
    </script>
</head>
<body>
    <div class="main-content">
    <!-- Navigation -->
    <nav class="nav">
${langSelector}
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-icon">
                    <img src="/src/assets/images/Icon.png" alt="Cluso App Icon" class="hero-app-icon">
                </div>
                <h1 class="hero-title">
                    ${t.hero.title}
                    <span class="hero-title-accent">${t.hero.titleAccent}</span>
                </h1>
                <p class="hero-subtitle">
                    ${t.hero.subtitle}
                </p>

                <div class="hero-actions">
                    <a href="./how-to-play.html" class="how-to-play-btn">${t.hero.howToPlayBtn}</a>

                    <div class="hero-download-section">
                        <div class="hero-rating">
                            <div class="stars">${t.hero.ratingStars}</div>
                            <span class="rating-text">${t.hero.ratingText}</span>
                        </div>
                        <a href="${t.appStoreUrl}"
                           target="_blank"
                           rel="noopener"
                           class="download-btn">
                            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                 alt="${t.hero.downloadBtnAlt}"
                                 class="app-store-badge">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Halloween Special Banner -->
    <section class="halloween-special">
        <div class="container">
            <div class="halloween-banner">
                <img src="/mummy-character.png" alt="Halloween Mummy Character" class="halloween-icon">
                <div class="halloween-content">
                    <span class="halloween-badge">${t.halloween.badge}</span>
                    <h2 class="halloween-title">${t.halloween.title}</h2>
                    <p class="halloween-description">
                        ${t.halloween.description}
                    </p>
                    <a href="${t.appStoreUrl}"
                       target="_blank"
                       rel="noopener"
                       class="download-btn halloween-download">
                        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                             alt="${t.hero.downloadBtnAlt}"
                             class="app-store-badge">
                    </a>
                    <div class="halloween-features">
                        <div class="halloween-feature">
                            <span class="feature-icon">👻</span>
                            <span>${t.halloween.features.characters}</span>
                        </div>
                        <div class="halloween-feature">
                            <span class="feature-icon">🕷️</span>
                            <span>${t.halloween.features.questions}</span>
                        </div>
                        <div class="halloween-feature">
                            <span class="feature-icon">🦇</span>
                            <span>${t.halloween.features.scenarios}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Screenshots -->
    <section class="screenshots">
        <div class="container">
            <h2 class="section-title">${t.screenshots.title}</h2>
            <div class="screenshots-grid">
                <div class="screenshot-item">
                    <img src="/src/assets/images/Screenshots/0-c.png" alt="Game selection screen" class="screenshot-img">
                    <p class="screenshot-caption">${t.screenshots.captions.game}</p>
                </div>
                <div class="screenshot-item">
                    <img src="/src/assets/images/Screenshots/1.png" alt="Impostor gameplay" class="screenshot-img">
                    <p class="screenshot-caption">${t.screenshots.captions.play}</p>
                </div>
                <div class="screenshot-item">
                    <img src="/src/assets/images/Screenshots/2.png" alt="Voting interface" class="screenshot-img">
                    <p class="screenshot-caption">${t.screenshots.captions.vote}</p>
                </div>
            </div>
        </div>
    </section>

${t.aboutGame ? `
    <!-- About Game -->
    <section class="about-game">
        <div class="container">
            <h2 class="section-title">${t.aboutGame.title}</h2>
            <p class="about-description">${t.aboutGame.description}</p>
            <div class="about-features">
                <div class="about-feature">
                    <h3>${t.aboutGame.features.offline.title}</h3>
                    <p>${t.aboutGame.features.offline.description}</p>
                </div>
                <div class="about-feature">
                    <h3>${t.aboutGame.features.players.title}</h3>
                    <p>${t.aboutGame.features.players.description}</p>
                </div>
                <div class="about-feature">
                    <h3>${t.aboutGame.features.oneDevice.title}</h3>
                    <p>${t.aboutGame.features.oneDevice.description}</p>
                </div>
            </div>
        </div>
    </section>
` : ''}
${t.perfectFor ? `
    <!-- Perfect For -->
    <section class="perfect-for">
        <div class="container">
            <h2 class="section-title">${t.perfectFor.title}</h2>
            <p class="section-subtitle">${t.perfectFor.subtitle}</p>
            <div class="occasions-grid">
                <div class="occasion-item">
                    <h3>${t.perfectFor.occasions.parties.title}</h3>
                    <p>${t.perfectFor.occasions.parties.description}</p>
                </div>
                <div class="occasion-item">
                    <h3>${t.perfectFor.occasions.family.title}</h3>
                    <p>${t.perfectFor.occasions.family.description}</p>
                </div>
                <div class="occasion-item">
                    <h3>${t.perfectFor.occasions.friends.title}</h3>
                    <p>${t.perfectFor.occasions.friends.description}</p>
                </div>
                <div class="occasion-item">
                    <h3>${t.perfectFor.occasions.events.title}</h3>
                    <p>${t.perfectFor.occasions.events.description}</p>
                </div>
            </div>
        </div>
    </section>
` : ''}
${t.faq ? `
    <!-- FAQ -->
    <section class="faq">
        <div class="container">
            <h2 class="section-title">${t.faq.title}</h2>
            <div class="faq-list">
                <div class="faq-item">
                    <h3 class="faq-question">${t.faq.questions.whatIs.q}</h3>
                    <p class="faq-answer">${t.faq.questions.whatIs.a}</p>
                </div>
                <div class="faq-item">
                    <h3 class="faq-question">${t.faq.questions.howMany.q}</h3>
                    <p class="faq-answer">${t.faq.questions.howMany.a}</p>
                </div>
                <div class="faq-item">
                    <h3 class="faq-question">${t.faq.questions.offline.q}</h3>
                    <p class="faq-answer">${t.faq.questions.offline.a}</p>
                </div>
                <div class="faq-item">
                    <h3 class="faq-question">${t.faq.questions.devices.q}</h3>
                    <p class="faq-answer">${t.faq.questions.devices.a}</p>
                </div>
                <div class="faq-item">
                    <h3 class="faq-question">${t.faq.questions.free.q}</h3>
                    <p class="faq-answer">${t.faq.questions.free.a}</p>
                </div>
            </div>
        </div>
    </section>
` : ''}

    <!-- CTA -->
    <section class="cta">
        <div class="container">
            <h2 class="cta-title">${t.cta.title}</h2>
            <p class="cta-description">${t.cta.description}</p>
            <a href="${t.appStoreUrl}"
               target="_blank"
               rel="noopener"
               class="download-btn">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                     alt="${t.hero.downloadBtnAlt}"
                     class="app-store-badge">
            </a>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>${t.footer.copyright}</p>
            <div class="footer-links">
                <a href="https://falsepeak.ch/privacy">${t.footer.links.privacy}</a>
                <a href="https://falsepeak.ch/terms">${t.footer.links.terms}</a>
                <a href="https://falsepeak.ch">${t.footer.links.website}</a>
            </div>
        </div>
    </footer>
    </div>
</body>
</html>
`;

  const dir = `./${lang}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(`${dir}/index.html`, html);
  console.log(`✅ Generated ${lang}/index.html`);
}

// Build how-to-play.html for each language
function buildHowToPlayPage(lang) {
  const t = JSON.parse(fs.readFileSync(`./translations/${lang}.json`, 'utf8'));
  const hreflangLinks = generateHreflangLinks(lang, false);
  const langSelector = generateLanguageSelector(lang);

  const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Primary Meta Tags -->
    <title>${t.meta.howToPlay.title}</title>
    <meta name="title" content="${t.meta.howToPlay.title}">
    <meta name="description" content="${t.meta.howToPlay.description}">
    <meta name="keywords" content="${t.meta.howToPlay.keywords}">
    <meta name="author" content="False Peak">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://falsepeak.ch/cluso/${lang}/how-to-play.html">

    <!-- Hreflang Tags -->
${hreflangLinks}

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://falsepeak.ch/cluso/${lang}/how-to-play.html">
    <meta property="og:site_name" content="Cluso">
    <meta property="og:title" content="${t.meta.howToPlay.title}">
    <meta property="og:description" content="${t.meta.howToPlay.description}">
    <meta property="og:image" content="https://falsepeak.ch/cluso/src/assets/images/Icon.png">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://falsepeak.ch/cluso/${lang}/how-to-play.html">
    <meta name="twitter:title" content="${t.meta.howToPlay.title}">
    <meta name="twitter:description" content="${t.meta.howToPlay.description}">
    <meta name="twitter:image" content="https://falsepeak.ch/cluso/src/assets/images/Icon.png">

    <!-- App Store Meta Tags -->
    <meta name="apple-itunes-app" content="app-id=6747049428, affiliate-data=pt=127841352&ct=web">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="Cluso">

    <!-- Additional Meta Tags -->
    <meta name="application-name" content="Cluso">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="theme-color" content="#0078CC">

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/src/assets/images/Icon.png">
    <link rel="apple-touch-icon" href="/src/assets/images/Icon.png">
    <link rel="manifest" href="/manifest.json">

    <!-- Preconnect -->
    <link rel="preconnect" href="https://apps.apple.com">
    <link rel="dns-prefetch" href="https://apps.apple.com">

    <!-- CSS -->
    <link rel="stylesheet" href="/src/main.css">

    <!-- Firebase Analytics -->
    <script type="module" src="/src/firebase-init.js"></script>

    <!-- Navigation Scripts -->
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        // Language Selector
        const languageBtn = document.getElementById('languageBtn');
        const languageDropdown = document.getElementById('languageDropdown');

        if (languageBtn && languageDropdown) {
            languageBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const isOpen = languageDropdown.classList.contains('show');
                languageDropdown.classList.toggle('show');
                languageBtn.setAttribute('aria-expanded', !isOpen);
            });

            document.addEventListener('click', function() {
                languageDropdown.classList.remove('show');
                languageBtn.setAttribute('aria-expanded', 'false');
            });

            languageDropdown.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                navLinks.classList.toggle('show');
            });

            document.addEventListener('click', function(e) {
                if (!navLinks.contains(e.target) && e.target !== menuToggle) {
                    navLinks.classList.remove('show');
                }
            });
        }
    });
    </script>
</head>
<body>
    <div class="main-content">
    <!-- Navigation -->
    <nav class="nav">
${langSelector}
    </nav>

    <!-- Hero Section -->
    <section class="hero" style="padding: 2rem 0 3rem;">
        <div class="container">
            <h1 class="hero-title" style="margin-bottom: 1rem;">
                ${t.howToPlayPage.hero.title}
                <span class="hero-title-accent">${t.howToPlayPage.hero.titleAccent}</span>
            </h1>
            <p class="hero-subtitle">${t.howToPlayPage.hero.subtitle}</p>
        </div>
    </section>

    <!-- Getting Started -->
    <section class="guide-section">
        <div class="container">
            <h2 class="section-title">${t.howToPlayPage.gettingStarted.title}</h2>
            <div class="steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h3>${t.howToPlayPage.gettingStarted.steps.download.title}</h3>
                        <p>${t.howToPlayPage.gettingStarted.steps.download.description}</p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h3>${t.howToPlayPage.gettingStarted.steps.gather.title}</h3>
                        <p>${t.howToPlayPage.gettingStarted.steps.gather.description}</p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h3>${t.howToPlayPage.gettingStarted.steps.choose.title}</h3>
                        <p>${t.howToPlayPage.gettingStarted.steps.choose.description}</p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">4</div>
                    <div class="step-content">
                        <h3>${t.howToPlayPage.gettingStarted.steps.pass.title}</h3>
                        <p>${t.howToPlayPage.gettingStarted.steps.pass.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Impostor Guide -->
    <section class="guide-section">
        <div class="container">
            <div class="game-guide">
                <h2 class="game-title">${t.howToPlayPage.impostorGuide.gameTitle}</h2>
                <p class="game-description">${t.howToPlayPage.impostorGuide.description}</p>
                <div class="game-rules">
                    <div class="rules-section">
                        <h4>${t.howToPlayPage.impostorGuide.howToPlay.title}</h4>
                        <ol>
                            ${t.howToPlayPage.impostorGuide.howToPlay.steps.map(step => `<li>${step}</li>`).join('\n                            ')}
                        </ol>
                    </div>
                    <div class="rules-section">
                        <h4>${t.howToPlayPage.impostorGuide.tips.title}</h4>
                        <ul>
                            ${t.howToPlayPage.impostorGuide.tips.list.map(tip => `<li>${tip}</li>`).join('\n                            ')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Master the Game -->
    <section class="tips">
        <div class="container">
            <h2 class="section-title">${t.howToPlayPage.masterGame.title}</h2>
            <div class="tips-grid">
                <div class="tip">
                    <h3>${t.howToPlayPage.masterGame.tips.innocents.title}</h3>
                    <p>${t.howToPlayPage.masterGame.tips.innocents.description}</p>
                </div>
                <div class="tip">
                    <h3>${t.howToPlayPage.masterGame.tips.impostors.title}</h3>
                    <p>${t.howToPlayPage.masterGame.tips.impostors.description}</p>
                </div>
                <div class="tip">
                    <h3>${t.howToPlayPage.masterGame.tips.discussion.title}</h3>
                    <p>${t.howToPlayPage.masterGame.tips.discussion.description}</p>
                </div>
                <div class="tip">
                    <h3>${t.howToPlayPage.masterGame.tips.voting.title}</h3>
                    <p>${t.howToPlayPage.masterGame.tips.voting.description}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Halloween Section -->
    <section class="halloween-special">
        <div class="container">
            <div class="halloween-banner">
                <img src="/mummy-character.png" alt="Halloween Mummy Character" class="halloween-icon">
                <div class="halloween-content">
                    <span class="halloween-badge">${t.halloween.badge}</span>
                    <h2 class="halloween-title">${t.howToPlayPage.halloweenSection.title}</h2>
                    <p class="halloween-description">${t.howToPlayPage.halloweenSection.subtitle}</p>
                    <a href="${t.appStoreUrl}"
                       target="_blank"
                       rel="noopener"
                       class="download-btn halloween-download">
                        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                             alt="${t.hero.downloadBtnAlt}"
                             class="app-store-badge">
                    </a>
                    <div class="halloween-features">
                        <div class="halloween-feature">
                            <span class="feature-icon">👻</span>
                            <span>${t.howToPlayPage.halloweenSection.features.characters.title}</span>
                        </div>
                        <div class="halloween-feature">
                            <span class="feature-icon">🕷️</span>
                            <span>${t.howToPlayPage.halloweenSection.features.questions.title}</span>
                        </div>
                        <div class="halloween-feature">
                            <span class="feature-icon">🦇</span>
                            <span>${t.howToPlayPage.halloweenSection.features.parties.title}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="cta">
        <div class="container">
            <h2 class="cta-title">${t.howToPlayPage.finalCta.title}</h2>
            <p class="cta-description">${t.howToPlayPage.finalCta.description}</p>
            <a href="${t.appStoreUrl}" target="_blank" rel="noopener" class="download-btn">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                     alt="${t.hero.downloadBtnAlt}"
                     class="app-store-badge">
            </a>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>${t.footer.copyright}</p>
            <div class="footer-links">
                <a href="https://falsepeak.ch/privacy">${t.footer.links.privacy}</a>
                <a href="https://falsepeak.ch/terms">${t.footer.links.terms}</a>
                <a href="https://falsepeak.ch">${t.footer.links.website}</a>
            </div>
        </div>
    </footer>
    </div>
</body>
</html>
`;

  const dir = `./${lang}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(`${dir}/how-to-play.html`, html);
  console.log(`✅ Generated ${lang}/how-to-play.html`);
}

// Build rules.html for each language
function buildRulesPage(lang) {
  const t = JSON.parse(fs.readFileSync(`./translations/${lang}.json`, 'utf8'));
  if (!t.rulesPage) {
    console.log(`⚠️  Skipping ${lang}/rules.html (no rulesPage data)`);
    return;
  }

  const navigation = generateNavigation(lang, 'rules');
  const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t.rulesPage.meta.title}</title>
    <meta name="description" content="${t.rulesPage.meta.description}">
    <meta name="keywords" content="${t.rulesPage.meta.keywords}">
    <link rel="canonical" href="https://falsepeak.ch/cluso/${lang}/rules.html">
    <link rel="stylesheet" href="/src/main.css">
    <script type="module" src="/src/firebase-init.js"></script>
    <!-- Navigation Scripts -->
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const languageBtn = document.getElementById('languageBtn');
        const languageDropdown = document.getElementById('languageDropdown');
        if (languageBtn && languageDropdown) {
            languageBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                languageDropdown.classList.toggle('show');
            });
            document.addEventListener('click', function() {
                languageDropdown.classList.remove('show');
            });
        }
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                navLinks.classList.toggle('show');
            });
        }
    });
    </script>
</head>
<body>
    <div class="main-content">
    <nav class="nav">${navigation}</nav>
    <section class="hero" style="padding: 2rem 0 3rem;"><div class="container"><h1 class="hero-title">${t.rulesPage.hero.title} <span class="hero-title-accent">${t.rulesPage.hero.titleAccent}</span></h1><p class="hero-subtitle">${t.rulesPage.hero.subtitle}</p></div></section>
    <section class="guide-section"><div class="container"><h2 class="section-title">${t.rulesPage.gameSetup.title}</h2><p>${t.rulesPage.gameSetup.intro}</p><h3>${t.rulesPage.gameSetup.requirements.title}</h3><ul>${t.rulesPage.gameSetup.requirements.items.map(item => `<li>${item}</li>`).join('')}</ul><h3>${t.rulesPage.gameSetup.roles.title}</h3><div><h4>${t.rulesPage.gameSetup.roles.impostor.name}</h4><p>${t.rulesPage.gameSetup.roles.impostor.description}</p><h4>${t.rulesPage.gameSetup.roles.innocent.name}</h4><p>${t.rulesPage.gameSetup.roles.innocent.description}</p></div></div></section>
    <section class="guide-section"><div class="container"><h2 class="section-title">${t.rulesPage.howToPlay.title}</h2>${t.rulesPage.howToPlay.phases.map(phase => `<div class="step"><h3>${phase.title}</h3><p>${phase.description}</p></div>`).join('')}</div></section>
    <section class="cta"><div class="container"><h2 class="cta-title">${t.rulesPage.cta.title}</h2><p class="cta-description">${t.rulesPage.cta.description}</p><a href="${t.appStoreUrl}" target="_blank" rel="noopener" class="download-btn"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="${t.hero.downloadBtnAlt}" class="app-store-badge"></a></div></section>
    <footer class="footer"><div class="container"><p>${t.footer.copyright}</p><div class="footer-links"><a href="https://falsepeak.ch/privacy">${t.footer.links.privacy}</a><a href="https://falsepeak.ch/terms">${t.footer.links.terms}</a><a href="https://falsepeak.ch">${t.footer.links.website}</a></div></div></footer>
    </div>
</body>
</html>`;

  fs.writeFileSync(`./${lang}/rules.html`, html);
  console.log(`✅ Generated ${lang}/rules.html`);
}

// Build tips.html for each language
function buildTipsPage(lang) {
  const t = JSON.parse(fs.readFileSync(`./translations/${lang}.json`, 'utf8'));
  if (!t.tipsPage) {
    console.log(`⚠️  Skipping ${lang}/tips.html (no tipsPage data)`);
    return;
  }

  const navigation = generateNavigation(lang, 'tips');
  const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t.tipsPage.meta.title}</title>
    <meta name="description" content="${t.tipsPage.meta.description}">
    <meta name="keywords" content="${t.tipsPage.meta.keywords}">
    <link rel="canonical" href="https://falsepeak.ch/cluso/${lang}/tips.html">
    <link rel="stylesheet" href="/src/main.css">
    <script type="module" src="/src/firebase-init.js"></script>
    <!-- Navigation Scripts -->
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const languageBtn = document.getElementById('languageBtn');
        const languageDropdown = document.getElementById('languageDropdown');
        if (languageBtn && languageDropdown) {
            languageBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                languageDropdown.classList.toggle('show');
            });
            document.addEventListener('click', function() {
                languageDropdown.classList.remove('show');
            });
        }
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                navLinks.classList.toggle('show');
            });
        }
    });
    </script>
</head>
<body>
    <div class="main-content">
    <nav class="nav">${navigation}</nav>
    <section class="hero" style="padding: 2rem 0 3rem;"><div class="container"><h1 class="hero-title">${t.tipsPage.hero.title} <span class="hero-title-accent">${t.tipsPage.hero.titleAccent}</span></h1><p class="hero-subtitle">${t.tipsPage.hero.subtitle}</p></div></section>
    <section class="guide-section"><div class="container"><h2 class="section-title">${t.tipsPage.forInnocents.title}</h2><p>${t.tipsPage.forInnocents.intro}</p>${t.tipsPage.forInnocents.tips.map(tip => `<div class="tip"><h3>${tip.title}</h3><p>${tip.description}</p></div>`).join('')}</div></section>
    <section class="guide-section"><div class="container"><h2 class="section-title">${t.tipsPage.forImpostors.title}</h2><p>${t.tipsPage.forImpostors.intro}</p>${t.tipsPage.forImpostors.tips.map(tip => `<div class="tip"><h3>${tip.title}</h3><p>${tip.description}</p></div>`).join('')}</div></section>
    <section class="cta"><div class="container"><h2 class="cta-title">${t.tipsPage.cta.title}</h2><p class="cta-description">${t.tipsPage.cta.description}</p><a href="${t.appStoreUrl}" target="_blank" rel="noopener" class="download-btn"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="${t.hero.downloadBtnAlt}" class="app-store-badge"></a></div></section>
    <footer class="footer"><div class="container"><p>${t.footer.copyright}</p><div class="footer-links"><a href="https://falsepeak.ch/privacy">${t.footer.links.privacy}</a><a href="https://falsepeak.ch/terms">${t.footer.links.terms}</a><a href="https://falsepeak.ch">${t.footer.links.website}</a></div></div></footer>
    </div>
</body>
</html>`;

  fs.writeFileSync(`./${lang}/tips.html`, html);
  console.log(`✅ Generated ${lang}/tips.html`);
}

// Build blog pages for each language
function buildBlogPages(lang) {
  const t = JSON.parse(fs.readFileSync(`./translations/${lang}.json`, 'utf8'));
  if (!t.blog) {
    console.log(`⚠️  Skipping ${lang}/blog/* (no blog data)`);
    return;
  }

  const langSelector = generateLanguageSelector(lang);
  const blogDir = `./${lang}/blog`;
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }

  const blogNavigation = generateNavigation(lang, 'blog');

  // Build blog index
  const indexHtml = `<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t.blog.index.meta.title}</title>
    <meta name="description" content="${t.blog.index.meta.description}">
    <meta name="keywords" content="${t.blog.index.meta.keywords}">
    <link rel="canonical" href="https://falsepeak.ch/cluso/${lang}/blog/">
    <link rel="stylesheet" href="/src/main.css">
    <script type="module" src="/src/firebase-init.js"></script>
    <!-- Navigation Scripts -->
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const languageBtn = document.getElementById('languageBtn');
        const languageDropdown = document.getElementById('languageDropdown');
        if (languageBtn && languageDropdown) {
            languageBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                languageDropdown.classList.toggle('show');
            });
            document.addEventListener('click', function() {
                languageDropdown.classList.remove('show');
            });
        }
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                navLinks.classList.toggle('show');
            });
        }
    });
    </script>
</head>
<body>
    <div class="main-content">
    <nav class="nav">${blogNavigation}</nav>
    <section class="hero" style="padding: 2rem 0 3rem;"><div class="container"><h1 class="hero-title">${t.blog.index.hero.title}</h1><p class="hero-subtitle">${t.blog.index.hero.subtitle}</p></div></section>
    <section class="guide-section"><div class="container"><h2 class="section-title">${t.blog.index.featured}</h2>${Object.entries(t.blog.articles).map(([slug, article]) => `<div class="blog-card"><h3><a href="./${slug}.html">${article.title}</a></h3><p class="blog-date">${article.date}</p><p>${article.intro}</p></div>`).join('')}</div></section>
    <footer class="footer"><div class="container"><p>${t.footer.copyright}</p></div></footer>
    </div>
</body>
</html>`;

  fs.writeFileSync(`${blogDir}/index.html`, indexHtml);
  console.log(`✅ Generated ${lang}/blog/index.html`);

  const articleNavigation = generateNavigation(lang, 'blog-article');

  // Build individual blog articles
  Object.entries(t.blog.articles).forEach(([slug, article]) => {
    const articleHtml = `<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${article.meta.title}</title>
    <meta name="description" content="${article.meta.description}">
    <meta name="keywords" content="${article.meta.keywords}">
    <link rel="canonical" href="https://falsepeak.ch/cluso/${lang}/blog/${slug}.html">
    <link rel="stylesheet" href="/src/main.css">
    <script type="module" src="/src/firebase-init.js"></script>
    <!-- Navigation Scripts -->
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const languageBtn = document.getElementById('languageBtn');
        const languageDropdown = document.getElementById('languageDropdown');
        if (languageBtn && languageDropdown) {
            languageBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                languageDropdown.classList.toggle('show');
            });
            document.addEventListener('click', function() {
                languageDropdown.classList.remove('show');
            });
        }
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                navLinks.classList.toggle('show');
            });
        }
    });
    </script>
</head>
<body>
    <div class="main-content">
    <nav class="nav">${articleNavigation}</nav>
    <article class="blog-article"><div class="container"><h1>${article.title}</h1><p class="blog-date">${article.date}</p><p class="blog-intro">${article.intro}</p>${article.content.map(section => `<div class="blog-section"><h2>${section.heading}</h2><p>${section.text}</p></div>`).join('')}<div class="blog-conclusion"><p>${article.conclusion}</p></div></div></article>
    <section class="cta"><div class="container"><a href="${t.appStoreUrl}" target="_blank" rel="noopener" class="download-btn"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="${t.hero.downloadBtnAlt}" class="app-store-badge"></a></div></section>
    <footer class="footer"><div class="container"><p>${t.footer.copyright}</p></div></footer>
    </div>
</body>
</html>`;

    fs.writeFileSync(`${blogDir}/${slug}.html`, articleHtml);
    console.log(`✅ Generated ${lang}/blog/${slug}.html`);
  });
}

// Build all language pages
console.log('🌍 Building multilingual pages...\n');
languages.forEach(lang => {
  buildIndexPage(lang);
  buildHowToPlayPage(lang);
  buildRulesPage(lang);
  buildTipsPage(lang);
  buildBlogPages(lang);
});

console.log('\n✨ All pages generated successfully!');
