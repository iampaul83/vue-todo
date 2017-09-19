import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
