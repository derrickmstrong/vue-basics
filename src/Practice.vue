<template>
    <div class="container app">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Hello World!"/>
      <Name firstName="Sam" />
      <Name firstName="Regina" />
      <Loops />
      <Data />
      <Bind />
      <ExternalData />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Name from './components/Name.vue'
import Loops from './components/Loops.vue'
import Data from './components/Data.vue'
import Bind from './components/Bind.vue'
import ExternalData from './components/ExternalData.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Name,
    Loops,
    Data,
    Bind,
    ExternalData,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
