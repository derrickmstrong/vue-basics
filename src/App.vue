<template>
<div class="container">
  <router-link :to="{name: 'home'}">Home</router-link> | 
  <router-link :to="{name: 'shop'}">Shop</router-link>
    <router-view />
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
