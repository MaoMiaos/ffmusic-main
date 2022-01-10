import axios from 'axios';
import store from '../store';
const baseURL = import.meta.env.VITE_API_HOST;
const instance = axios.create({
  baseURL
});
// request interceptor
instance.interceptors.request.use(
  config => {
    if (store.state.user.token) {
      config.headers['Authorization'] = store.state.user.token;
    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);
const { get, post, put } = instance;
export { get, post, put };
