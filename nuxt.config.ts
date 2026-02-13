const isDevMode = process.env.DEV_MODE === "true"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: isDevMode ? "http://localhost:6969" : "https://itsduck.com",
  },
  // -------------------------------------------------
  // ⚙️ Core
  // -------------------------------------------------
  compatibilityDate: "2025-07-15",

  typescript: {
    shim: false,
  },

  devtools: {
    enabled: false,
  },

  // -------------------------------------------------
  // 📦 Modules
  // -------------------------------------------------
  modules: ["@nuxt/eslint", "@nuxtjs/sitemap"],

  // -------------------------------------------------
  // SITEMAP
  // -------------------------------------------------
  sitemap: {
    exclude: isDevMode
      ? []
      : ["/", "/presale", "/contact", "/ecosystem", "/duckpad"],
    defaults: {
      lastmod: new Date().toISOString(),
      priority: 1.0,
      changefreq: "daily",
    },
  },

  // -------------------------------------------------
  // 🎨 Global CSS
  // -------------------------------------------------
  css: ["@/assets/styles/main.scss", "swiper/css"],

  // -------------------------------------------------
  // ⚡ Vite
  // -------------------------------------------------
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/utils/mixins.scss" as *;\n',
        },
      },
    },
    server: {
      allowedHosts: ["itsduck.com", "www.itsduck.com"],
    },
  },

  // -------------------------------------------------
  // 🏛️ App Meta / Head
  // -------------------------------------------------
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      title: "Duck",

      htmlAttrs: {
        lang: "en",
      },

      script: isDevMode
        ? []
        : [
            // --- Google Tag Manager ---
            {
              id: "gtm-inline",
              // Nuxt/Unhead inline script:
              innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WMDG4QPJ');`,
              type: "text/javascript",
              tagPosition: "head",
            },

            // --- Google tag (gtag.js) ---
            {
              id: "gtag-src",
              src: "https://www.googletagmanager.com/gtag/js?id=G-VLPZRKJVC6",
              async: true,
              tagPosition: "head",
            },
            {
              id: "gtag-inline",
              innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-VLPZRKJVC6');`,
              type: "text/javascript",
              tagPosition: "head",
            },
          ],

      // ✅ 2) GTM noscript immediately after <body> (prod only)
      noscript: isDevMode
        ? []
        : [
            {
              id: "gtm-noscript",
              innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WMDG4QPJ"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
              tagPosition: "bodyOpen",
            },
          ],

      meta: [
        // Base

        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },

        { name: "theme-color", content: "#0e0e0e" },
        { charset: "utf-8" },

        // SEO
        { name: "title", content: "Duck" },
        {
          name: "description",
          content:
            "2026's Hottest Memecoin Presale. The memecoin everyone's talking about. Early adopters get exclusive perks and higher allocations.",
        },

        // Open Graph
        { property: "og:title", content: "Duck" },
        {
          property: "og:description",
          content:
            "2026's Hottest Memecoin Presale. The memecoin everyone's talking about. Early adopters get exclusive perks and higher allocations.",
        },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Duck" },
        { property: "og:url", content: "https://itsduck.com" },
        { property: "og:image", content: "/og.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:type", content: "image/jpeg" },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Duck" },
        {
          name: "twitter:description",
          content:
            "2026's Hottest Memecoin Presale. The memecoin everyone's talking about. Early adopters get exclusive perks and higher allocations.",
        },
        { name: "twitter:image", content: "/og.png" },
      ],

      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/small-logo.webp",
        },
      ],
    },
  },

  // -------------------------------------------------
  // 🔧 Runtime Config
  // -------------------------------------------------
  runtimeConfig: {
    esputnikApiKey: process.env.ESPUTNIK_API_KEY,
    esputnikUsername: process.env.ESPUTNIK_USERNAME || "any",
    public: {
      dev_mode: isDevMode,
    },
  },
  devServer: {
    port: 6969,
  },
})
