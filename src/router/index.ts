import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue')
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/ExperienceView.vue')
    },
    {
      path: '/academics',
      name: 'academics',
      component: () => import('../views/AcademicsView.vue')
    },
    {
      path: '/more',
      name: 'more',
      component: () => import('../views/MoreView.vue')
    }
  ]
});

export default router;
