// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  modules: ["@nuxt/eslint"],

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

      meta: [
        // Base
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#0e0e0e" },
        { charset: "utf-8" },

        // SEO
        { name: "title", content: "Duck" },
        {
          name: "description",
          content:
            "The first meme coin launchpad with contract-level rug protection.No trust required – just code that actually works.",
        },

        // Open Graph
        { property: "og:title", content: "Duck" },
        {
          property: "og:description",
          content:
            "The first meme coin launchpad with contract-level rug protection. No trust required – just code that actually works.",
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
            "The first meme coin launchpad with contract-level rug protection. No trust required – just code that actually works.",
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
    public: {
      dev_mode: Boolean(process.env.DEV_MODE),
    },
  },
  devServer: {
    port: 6969,
  },
})
