import Vue from 'vue';
import Vuex from 'vuex';
import todo from './todo';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const myPlugin = (store) => {
  // called when the store is initialized
  const stateJSON = localStorage.getItem('vue-todo');
  if (stateJSON) {
    try {
      const state = JSON.parse(stateJSON);
      store.replaceState(state);
    } finally {
      //
    }
  }
  store.subscribe((mutation, state) => {
    localStorage.setItem('vue-todo', JSON.stringify(state));
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.
  });
};

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
  plugins: [myPlugin],
});
