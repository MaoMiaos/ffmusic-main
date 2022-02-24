import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '../pages/Layout.vue';

export const menusRoutes = [
  {
    path: 'dashboard',
    name: 'Dashboard',
    meta: { title: '控制台', icon: 'dashboard' },
    component: () => import('../pages/dashboard/Index.vue')
  },
  {
    path: 'user',
    name: 'User',
    meta: { title: '用户管理', icon: 'manage_accounts' },
    component: () => import('../pages/user/Index.vue')
  },
  {
    path: 'music',
    name: 'music',
    meta: { title: '歌曲管理', icon: 'music_note' },
    component: () => import('../pages/music/Index.vue')
  }
];

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    children: menusRoutes
  },
  {
    path: '/login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/403',
    component: () => import('../pages/403.vue')
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('../pages/404.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}
