const state = {
  routes: []
};
const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  }
};

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes = asyncRoutes || [];
      commit('SET_ROUTES', accessedRoutes);
      resolve(accessedRoutes);
    });
  }
};
