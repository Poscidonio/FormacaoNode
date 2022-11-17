import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/AboutView.vue';
import Cadastro_P from '../views/Cadastro_p.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/primeiraRota',
    name: 'PrimeiraRota',
    component: Cadastro_P,
    children: [
      {
        path: 'child',
        name: 'Child',
        component: About,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
