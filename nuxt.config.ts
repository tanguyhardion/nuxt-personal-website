// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['~/assets/scss/main.scss'],
  image: {
    dir: 'public/images'
  },
  modules: ['@nuxt/image', 'nuxt-gtag'],
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: 'G-60YRWFVFZD'
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://i.imgur.com/ne4z3Jr.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  }
});
