// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['../assets/css/main.css'],
  modules: ["vuetify-nuxt-module", '@nuxtjs/i18n'],
  ssr: true,
  nitro: {
    preset: 'vercel', // yoki 'vercel', 'netlify' va boshqalar
  },

  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'uz', name: 'O‘zbekcha', file: 'uz.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' },
    ],
    defaultLocale: 'ru',
    lazy: true,
    langDir: 'lang',
    strategy: 'prefix_except_default',
  },
})
