
// E:\quasar-project\src\pages\chemical.vue
import chemical from "pages/chemical.vue";
import disease from "pages/disease.vue";
import protection from "pages/protection.vue";
import servey from "pages/servey.vue";
import test from "pages/test.vue";
import test1 from "pages/test1.vue";
import test2 from "pages/test2.vue";

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/test1.vue') }
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
    path: '/protection',
    component: protection,
  },
  {
    path: '/servey',
    component: servey,
  },
  {
    path: '/test',
    component: test,
  },
  {
    path: '/test1',
    component: test1,
  },
  {
    path: '/test2',
    component: test2,
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
