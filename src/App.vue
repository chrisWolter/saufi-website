<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <h1 class="logo">Logo</h1>
      </b-row>
      <b-row class="justify-content-md-center decider">
        <Decider/>
      </b-row>
      <b-row class="justify-content-md-center task">
        <Task/>
      </b-row>
      <b-row class="justify-content-md-center">
        <b-col col md="6">
          <b-button block variant="primary">Block Level Button</b-button>
        </b-col>
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

<style>
  .logo {
    text-align: center;
    width: 100%;
    margin-bottom: 40px;
  }
  .decider {
    margin-bottom: 40px;
  }
  .task {
    margin-bottom: 40px;
  }

  .subheading {
    margin: 0;
  }
</style>
