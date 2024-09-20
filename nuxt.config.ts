// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['~/assets/scss/main.scss'],
  image: {
    dir: 'assets/images'
  },
  modules: ['@nuxt/image', 'nuxt-mdi']
});