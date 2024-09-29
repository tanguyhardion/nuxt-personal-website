import FloatingVue from 'floating-vue';
import 'floating-vue/dist/style.css';

export default defineNuxtPlugin((nuxtApp) => {
  FloatingVue.options.distance = 8;
  nuxtApp.vueApp.use(FloatingVue);
});
