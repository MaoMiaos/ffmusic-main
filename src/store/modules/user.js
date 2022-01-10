import { login } from '../../api/user.js';
import { getToken, removeToken, setToken } from '../../utils/auth.js';

const state = {
  nickname: '',
  token: getToken(),
  username: '',
  roles: []
};
const getters = {
  nicknameFirstWord: state => {
    return state.nickname.slice(0, 1);
  }
};
const actions = {
  // user login
  login({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      login(username.trim(), password)
        .then(response => {
          const authorization = response.headers['authorization'];
          console.log(authorization);
          //const { data } = response;
          commit('SET_TOKEN', authorization);
          setToken(authorization);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  logout({ commit }) {
    commit('SET_TOKEN', '');
    commit('SET_ROLES', []);
    removeToken();
  }
};
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },

  SET_NIckNAME: (state, nickname) => {
    state.nickname = nickname;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
