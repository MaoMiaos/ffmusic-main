import { createApp } from 'vue';
import { Quasar, Notify } from 'quasar';
import store from './store';
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';
import './permission';
// Import Quasar css
import 'quasar/src/css/index.sass';

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue';
import router from './router';
// import 'virtual:windi.css';
const myApp = createApp(App);

myApp.use(router);
myApp.use(store);
if (process.env.NODE_ENV === 'development') {
  myApp.config.devtools = true;
}
myApp.use(Quasar, {
  plugins: {
    Notify
  }
});
myApp.mount('#app');
