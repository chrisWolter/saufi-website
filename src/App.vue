<template>
  <div id="app" :style="{backgroundColor: randomColor()}">
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
  },
  data () {
    return {
      bright: [
        {hexcode: '#54478C'},
        {hexcode: '#2C699A'},
        {hexcode: '#048BA8'},
        {hexcode: '#0DB39E'},
        {hexcode: '#16DB93'},
        {hexcode: '#83E377'},
        {hexcode: '#B9E769'},
        {hexcode: '#EFEA5A'},
        {hexcode: '#F1C453'},
        {hexcode: '#F29E4C'}
      ],
      smallBright: [
        {hexcode: '#1A535C'},
        {hexcode: '#4ECDC4'},
        {hexcode: '#F7FFF7'},
        {hexcode: '#FF6B6B'},
        {hexcode: '#FFE66D'}
      ],
      pastel: [
        {hexcode: '#FFADAD'},
        {hexcode: '#FFD6A5'},
        {hexcode: '#FDFFB6'},
        {hexcode: '#CAFFBF'},
        {hexcode: '#9BF6FF'},
        {hexcode: '#A0C4FF'},
        {hexcode: '#BDB2FF'},
        {hexcode: '#FFC6FF'},
        {hexcode: '#FFFFFC'}
      ]
    }
  },
  methods: {
    randomColor() {
      const length = this.pastel.length
      const color = Math.floor(Math.random() * (length - 0 + 1)) + 0
      return this.pastel[color].hexcode
    }
  },
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
