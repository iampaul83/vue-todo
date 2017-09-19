<template>
  <div>
    <form @submit.prevent="addTodo">
      <label>Add todo 
        <input type="text" v-model="newTodo">
      </label>
    </form>
    <ul>
      <li v-for="(todo, index) in todos" :key="index"
          @click="$router.push(`/todo/${index}`)">
          {{ todo }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data() {
    return {
      newTodo: '',
    };
  },
  computed: {
    todos() {
      return this.$store.state.todo.todos;
    },
  },
  methods: {
    addTodo() {
      this.$store.commit('addTodo', this.newTodo);
      this.newTodo = '';
    },
  },
};
</script>

<style scoped>
li {
  cursor: pointer;
}
li:hover {
  background-color: hsl(171, 100%, 41%);
  color: #fff;
}
</style>
