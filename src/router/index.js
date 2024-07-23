import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/advertiser/Dashboard.vue';
import CreateAdvertisement from '../views/advertiser/CreateAdvertisement.vue';
import EditAdvertisement from '../views/advertiser/EditAdvertisement.vue';
import AuthService from '../auth/AuthService'; 


const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/contact/dashboard', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true } },
    {
      path: '/contact/create',
      name: 'CreateAdvertisement',
      component: CreateAdvertisement,
      meta: { requiresAuth: true }
    },
    {
      path: '/contact/edit/:id',
      name: 'EditAdvertisement',
      component: EditAdvertisement,
      meta: { requiresAuth: true }
    },
 
  ];
 
const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const loggedIn = AuthService.getCurrentUser();  

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login'); // Redirect to login if route requires authentication and user is not logged in
  } else {
    next();
  }
});

export default router;