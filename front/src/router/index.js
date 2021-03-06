import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import PageNotFound from '../components/PageNotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: PageNotFound,
    meta: {
      requiresAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
