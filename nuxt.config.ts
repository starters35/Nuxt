import { fileURLToPath } from 'node:url'
import pkg from './package.json'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxtjs/i18n'],

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },

  fonts: {
    families: [
      {
        name: 'Nata Sans',
        global: true,
      },
      {
        name: 'JetBrains Mono',
        global: true,
      },
    ],
  },

  i18n: {
    baseUrl: import.meta.env.BASE_URL,
    defaultLocale: 'en',
    langDir: 'locales/',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: false,
      redirectOn: 'no prefix',
      fallbackLocale: 'en',
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        files: ['global/en.json', 'meta/en.json'],
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'Русский',
        files: ['global/ru.json', 'meta/ru.json'],
      },
    ],
  },

  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
    $: fileURLToPath(new URL('./data', import.meta.url)),
    ':': fileURLToPath(new URL('./types', import.meta.url)),
    '+': fileURLToPath(new URL('./components', import.meta.url)),
    '&': fileURLToPath(new URL('./utils', import.meta.url)),
  },

  css: ['@/styles/main.sass'],
  devtools: { enabled: true },
})
