import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/main.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/index.vue'),
        children: [
          {
            path: 'chat/:id',
            name: 'chat',
            component: () => import('pages/chat.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
