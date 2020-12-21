<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <h1 class="logo">Hab ich saufi gehört</h1>
      </b-row>
      <b-row>
        <Decider/>
      </b-row>
      <b-row>
        <Task/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Decider from './components/Decider.vue'
import Task from './components/Task.vue'

export default {
  name: 'App',
  components: {
    Decider,
    Task
  }
}
</script>

<style scoped>
  .logo {
    text-align: center;
    width: 100%;
  }
</style>
