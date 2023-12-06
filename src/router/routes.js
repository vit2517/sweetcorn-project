
// E:\quasar-project\src\pages\chemical.vue
import chemical from "pages/chemical.vue";
import disease from "pages/disease.vue";
import protection from "pages/protection.vue";
import servey from "pages/servey.vue";

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/protection.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/chemical',
    component: chemical,
  },
  {
    path: '/disease',
    component: disease,
  },
  {
    path: '/servey',
    component: servey,
  },
  {
    path: '/protection',
    component: protection,
  },
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/ErrorNotFound.vue')
  // },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
