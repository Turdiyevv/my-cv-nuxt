// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['../assets/css/main.css'],
  modules: ["vuetify-nuxt-module"],
  ssr: true,
  nitro: {
    preset: 'vercel', // yoki 'vercel', 'netlify' va boshqalar
  },
})
