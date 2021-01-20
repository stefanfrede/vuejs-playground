import { createApp } from 'vue';
import { createHead } from '@vueuse/head';

import App from './App.vue';
import router from './router';

import '@/styles/index.css';

const app = createApp(App);
const head = createHead();

app.use(router).use(head).mount('#app');

// Check that service workers are supported
if ('serviceWorker' in navigator && process.env.NODE_ENV !== 'development') {
  // use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    try {
      navigator.serviceWorker.register('/sw.js');
    } catch (error) {
      console.error('Service worker registration failed: ', error);
    }
  });
}
