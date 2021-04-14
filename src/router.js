import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './pages/coaches/CoachesList.vue';
import { store } from './store/index';

const CoachDetails = () => import('./pages/coaches/CoachDetails.vue');
const NotFound = () => import('./pages/NotFound.vue');
const CoachRegistration = () => import('./pages/coaches/CoachRegistration.vue');
const Requests = () => import('./pages/requests/Requests.vue');
const ContactCoach = () => import('./pages/requests/ContactCoach.vue');
const UserAuth = () => import('./pages/auth/UserAuth.vue');

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach }
      ]
    },
    { path: '/register', component: CoachRegistration, meta: { requiresLog: true } },
    { path: '/requests', component: Requests, meta: { requiresLog: true } },
    { path: '/auth', component: UserAuth, meta: { requiresNotLog: true } },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'bg-gray-900',
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresLog && !store.getters.isAuthorized) {
    next('/auth');
  } else if (to.meta.requiresNotLog && store.getters.isAuthorized) {
    next('/coaches')
  } else {
    next();
  }
});
