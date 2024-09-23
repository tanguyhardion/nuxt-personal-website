// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['~/assets/scss/main.scss'],
  image: {
    dir: 'assets/images'
  },
  modules: ['@nuxt/image'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://i.imgur.com/ne4z3Jr.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ],
      script: [
        { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-60YRWFVFZD' },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-60YRWFVFZD');`
        }
      ],
      title: 'Tanguy Hardion'
    }
  }
});
