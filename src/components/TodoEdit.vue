<template>
  <div>
    <form @submit.prevent="$router.go(-1)">
      <label>Edit  todo 
        <input ref="input" type="text" v-model="todo" @input="editTodo">
      </label>
    </form>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data() {
    const index = this.$route.params.index;
    return {
      index,
      todo: this.$store.state.todo.todos[index],
    };
  },
  mounted() {
    this.$refs.input.focus();
  },
  methods: {
    editTodo() {
      this.$store.commit('editTodo', {
        index: this.index,
        todo: this.todo,
      });
    },
  },
};
</script>

<style scoped>
</style>
