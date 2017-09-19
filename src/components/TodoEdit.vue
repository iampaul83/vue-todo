<template>
  <div class="column is-half">
     <form @submit.prevent="$router.go(-1)">
      <div class="field">
        <label class="label">Edit todo</label>
        <div class="control">
          <input ref="input" class="input is-primary" type="text"
                 v-model="todo" @input="editTodo">
        </div>
      </div>
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
