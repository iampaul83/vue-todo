<template>
  <div class="column is-half">
    <form @submit.prevent="addTodo">
      <div class="field">
        <label class="label">Add todo</label>
        <div class="control">
          <input class="input is-primary" type="text" v-model="newTodo">
        </div>
      </div>
    </form>
    <!-- <h3 class="subtitle is-3">Todos</h3>
    <div class="box">
      <ul>
        <li v-for="(todo, index) in todos" :key="index"
            @click="$router.push(`/todo/${index}`)">
            {{ todo }}
        </li>
      </ul>
    </div> -->
    <nav class="panel" style="margin-top: 20px;">
      <p class="panel-heading">Todos</p>

      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input is-small" type="text" placeholder="search">
          <span class="icon is-small is-left">
            <i class="fa fa-search"></i>
          </span>
        </p>
      </div>

      <!-- <p class="panel-tabs">
        <a class="is-active">all</a>
        <a>public</a>
        <a>private</a>
        <a>sources</a>
        <a>forks</a>
      </p> -->

      <!-- <a class="panel-block is-active">
        <span class="panel-icon">
          <i class="fa fa-book"></i>
        </span>
        bulma
      </a> -->
      <a class="panel-block" v-for="(todo, index) in todos" :key="index"
         @click="$router.push(`/todo/${index}`)"
         @touchstart="touchClick($event, index)" :class="{selected: selected === index}">
        <label>
          <input type="checkbox" @click.stop>
          {{ todo }}
        </label>
        <ul>
          <li>
            <span class="icon">
              <i class="fa fa-thumb-tack"></i>
            </span>
          </li>
          <li>
            <span class="icon">
              <i class="fa fa-trash-o"></i>
            </span>
          </li>
        </ul>
      </a>
      <!-- <label class="panel-block" v-for="(todo, index) in todos" :key="index"
             @click="$router.push(`/todo/${index}`)">
        <input type="checkbox" @click.stop>
        {{ todo }}
      </label> -->

      <!-- <div class="panel-block">
        <button class="button is-primary is-outlined is-fullwidth">
          reset all filters
        </button>
      </div> -->
    </nav>
    
  </div>
</template>

<script>
export default {
  name: 'todo',
  data() {
    return {
      newTodo: '',
      selected: null,
    };
  },
  computed: {
    todos() {
      return this.$store.state.todo.todos;
    },
  },
  methods: {
    touchClick(e, index) {
      e.preventDefault();
      if (this.selected === index) {
        e.target.click();
      }
      this.selected = index;
    },
    addTodo() {
      this.$store.commit('addTodo', this.newTodo);
      this.newTodo = '';
    },
  },
};
</script>

<style scoped>
/* li {
  cursor: pointer;
}
li:hover {
  background-color: hsl(171, 100%, 41%);
  color: #fff;
} */
a.panel-block > label {
  cursor: pointer;
}
a.panel-block {
  display: flex;
}
a.panel-block > label {
  flex: 1;
}
a.panel-block > ul {
  display: none;
}
a.panel-block:hover > ul,
a.panel-block.selected > ul {
  display: block;
}
a.panel-block.selected {
  background-color: whitesmoke;
}
a.panel-block > ul > li {
  display: inline-block;
}
a.panel-block > ul > li:hover {
  color: hsl(171, 100%, 41%);
}
</style>
