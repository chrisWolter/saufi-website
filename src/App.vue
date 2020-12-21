<template>
  <div id="app">
    <h1>Hab ich saufi gehört</h1>
    <Decider/>
  </div>
</template>

<script>
import Decider from './components/Decider.vue'

export default {
  name: 'App',
  components: {
    Decider
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
