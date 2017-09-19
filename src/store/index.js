import Vue from 'vue';
import Vuex from 'vuex';
import todo from './todo';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: debug,
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
  },
  modules: {
    todo,
  },
});
