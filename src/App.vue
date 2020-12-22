<template>
  <div id="app" :style="{backgroundColor: bgColor}">
    <b-container fluid>
      <b-row>
        <h1 class="logo">Logo</h1>
      </b-row>
      <b-row id="saufi-decider" class="justify-content-md-center decider">
        <Decider :didIHearSaufi="didIHearSaufiVar"/>
      </b-row>
      <b-row v-if="didIHearTaskVar"  id="task-decider" class="justify-content-md-center task" :style="cssVars">
        <Task/>
      </b-row>
      <b-row id="reload-button" class="justify-content-md-center pos-bottom">
        <b-col col md="6">
          <b-button @click="reload()" block variant="primary" class="reload-button">Hab ich saufi gehört?</b-button>
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
      ],
      didIHearSaufiVar: Boolean,
      didIHearTaskVar: Boolean,
      bgColor: String,
      taskHeight: String,
      needOverflow: String
    }
  },
  mounted: function() {
    this.reload()
    this.setTaskStyle()
  },
  methods: {
    reload() {
      this.randomColor()
      this.didIHearSaufi()
      this.didIHearTask()
    },
    didIHearSaufi() {
      this.didIHearSaufiVar = Math.random() > 0.3
    },
    randomColor() {
      const length = this.pastel.length
      const color = Math.floor(Math.random() * (length - 0)) + 0
      this.bgColor = this.pastel[color].hexcode
    },
    didIHearTask() {
      this.didIHearTaskVar = Math.random() < 0.25
    },
    setTaskStyle(){
      const viewHeigth = window.innerHeight
      const titleHeigth = document.getElementById('saufi-decider').getBoundingClientRect().bottom + 40
      const buttonPosition = document.getElementById('reload-button').getBoundingClientRect().top - 40
      const taskHeight = document.getElementById('task-decider').getBoundingClientRect().height
      const calculatedTaskHeight = viewHeigth - titleHeigth - (viewHeigth - buttonPosition)

      this.taskHeight = calculatedTaskHeight + 'px'

      if(calculatedTaskHeight < taskHeight){
        this.needOverflow = 'scroll'
      }else {
        this.needOverflow =  'hidden'
      }
    },
  },
  computed: {
    cssVars() {
      return {
        '--height': this.taskHeight,
        '--overflow-hidden': this.needOverflow
      }
    }
  }
}
</script>

<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  #app {
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  }
  .logo {
    text-align: center;
    width: 100%;
    margin-bottom: 40px;
  }
  .decider {
    margin-bottom: 40px;
    max-height: 120px;
  }
  .task {
    margin-bottom: 40px;
    max-height: var(--height);
    overflow-y: var(--overflow-hidden);
  }

  .subheading {
    margin: 0;
  }
  .pos-bottom{
    position: absolute;
    bottom: 25px;
    width: 100%;
  }
  .reload-button{
    border-radius: 2rem !important;
    background-color: white !important;
    color: black !important;
    font-weight: bold !important;
    box-shadow: 1px 1px 6px grey !important;
    border: none !important;
  }
</style>
