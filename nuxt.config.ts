// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiKey: process.env.YOUTUBE,
      kitKey: process.env.NUXT_KIT,
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  ui: {
    colorMode: true
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    'shadcn-nuxt',
    '@tresjs/nuxt',
    '@nuxtjs/color-mode'
  ],
    shadcn: {
      prefix: '',
      componentDir: './components/ui'
    },
  colorMode: {
    preference: 'system'
  }
})