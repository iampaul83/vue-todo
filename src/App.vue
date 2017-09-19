<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img id="logo" src="./assets/logo.png" alt="Vue logo">
        </router-link>
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/counter" class="navbar-item">Counter</router-link>
        <router-link to="/todo" class="navbar-item">Todo</router-link>
    
        <!-- <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button> -->
      </div>
    </nav>
    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
@import '../node_modules/font-awesome/css/font-awesome.min.css';
@import '../node_modules/bulma/css/bulma.css';
</style>

<style scoped>
#logo {
    height: 1.75rem;
    width: 1.75rem;
}
</style>

