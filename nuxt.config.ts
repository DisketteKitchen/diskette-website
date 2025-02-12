// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]

    }

  },

  modules: [
    '@primevue/nuxt-module',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxt/image'
  ],

  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  },

  compatibilityDate: '2024-12-12'
})