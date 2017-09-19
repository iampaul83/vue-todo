import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Counter from '@/components/Counter';
import Todo from '@/components/Todo';
import TodoEdit from '@/components/TodoEdit';
import store from '@/store';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter,
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo,
    },
    {
      path: '/todo/:index(\\d+)',
      name: 'TodoEdit',
      component: TodoEdit,
      beforeEnter: (to, from, next) => {
        const targetIndex = parseInt(to.params.index, 10);
        // if no such todo
        if ((targetIndex + 1) > store.state.todo.todos.length) {
          return next('/todo');
        }
        return next();
      },
    },
  ],
});
