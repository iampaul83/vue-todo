<template>
  <div>
    <p>{{ count }}</p>
    <button class="button" @click="increment">+</button>
    <button class="button" @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
  },
};
</script>

<style scoped>
</style>
