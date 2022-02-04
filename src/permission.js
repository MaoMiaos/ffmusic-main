import router from './router';
import store from './store';
import { getCurrentUser, getToken } from './utils/auth.js';
import { Notify } from 'quasar';

const whiteList = ['/login', '/403', '/404'];
//在router守卫中增加上下文用户的角色判断，若为 ROLE_ADMIN继续访问；若不是提示错误并清空登录信息
router.beforeEach(async (to, from, next) => {
  const hasToken = getToken();

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      const currentUser = store.state.user.currentUser;
      const adminRole = currentUser.roles.find(item => {
        return item.name === 'ROLE_ADMIN';
      });
      if (adminRole) {
        next();
      } else {
        await store.dispatch('user/logout');
        Notify.create({
          type: 'negative',
          message: '你无权限访问后台',
          position: 'top'
        });
        next(`/login?redirect=${to.path}`);
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
