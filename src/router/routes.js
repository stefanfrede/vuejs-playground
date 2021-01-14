import Home from '../views/Home.vue';
import About from '../views/About.vue';
import NotFound from '../views/404.vue';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/:path(.*)',
    name: '404',
    component: NotFound,
  },
];
