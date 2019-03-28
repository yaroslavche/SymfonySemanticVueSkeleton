require('../css/app.css');

import Vue from 'vue';
import { store } from './store/index';
import { router } from './router';
import App from './App.vue';

window.onload = function () {
  const vm = new Vue({
    store,
    router,
    render: h => h(App),
  });
  vm.$mount('#app');
};
