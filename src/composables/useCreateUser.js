import { create } from '../api/user.js';
import { ref } from 'vue';

export const useCreateUser = () => {
  const createUser = (username, password) => {
    console.log(username, password);
    create({ username, password }).then(res => {});
  };
  return { createUser };
};
