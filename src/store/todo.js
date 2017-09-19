export default {
  state: { todos: [] },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    editTodo(state, payload) {
      state.todos.splice(payload.index, 1, payload.todo);
    },
  },

  // getters: {
  //   doubleCount(state) {
  //     return state.count * 2
  //   },
  // },
};
