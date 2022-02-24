import { get, post, put } from './request.js';

export const list = () => {
  return get('/music');
};
export const create = music => {
  return post('/music', music);
};
export const update = (id, music) => {
  return post(`/music/${id}`, music);
};
export const publish = id => {
  return post(`/music/${id}/publish`);
};
export const close = id => {
  return post(`/music/${id}/close`);
};
