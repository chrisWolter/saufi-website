<template>
  <div id="app">
    <b-container fluid>
        <b-row>
          <h1 class="logo">Logo</h1>
        </b-row>
        <b-row id="saufi-decider" class="justify-content-md-center decider">
          <Decider :didIHearSaufi="didIHearSaufiVar" class="decider-elem" :style="{backgroundImage: bgColor}"/>
        </b-row>
        <transition name="animation-task">
            <b-row v-show="didIHearTaskVar"  id="task-decider" class="justify-content-md-center task" :style="cssVars">
                <Task :tasks-json="tasksJson" class="task-elem"/>
            </b-row>
        </transition>

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
import gsap from "gsap";

export function animateDecider_in_bottomTop() {
    const tl = gsap.timeline({
        defaults: { ease: "expo", duration: 1.5 }
    });
    tl.from(".decider-elem", {
        delay: 0,
        duration: 1,
        scale: 0.9,
        y: 20,
    });
}


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
      gradients: [
        {gradient: 'linear-gradient( 135deg, #2AFADF 10%, #4C83FF 100%)'},
        {gradient: 'linear-gradient( 135deg, #EECE13 10%, #B210FF 100%)'},
        {gradient: 'linear-gradient( 135deg, #FFF720 10%, #3CD500 100%)'},
        {gradient: 'linear-gradient( 135deg, #FD6E6A 10%, #FFC600 100%)'},
        {gradient: 'linear-gradient( 135deg, #F0FF00 10%, #58CFFB 100%)'},
        {gradient: 'linear-gradient( 135deg, #81FFEF 10%, #F067B4 100%)'},
        {gradient: 'linear-gradient( 135deg, #FFF6B7 10%, #F6416C 100%)'},
      ],
      didIHearSaufiVar: Boolean,
      didIHearTaskVar: Boolean,
      bgColor: String,
      taskHeight: String,
      needOverflow: String,
      tasksJson: null
    }
  },
  mounted() {
    this.axios
        .get('https://alexherrmi.github.io/json/tasks.json')
        .then(resp =>
          this.tasksJson = resp.data
        )
    this.reload()
    this.setTaskStyle()
  },
  methods: {
    reload() {
      this.randomColor()
      this.didIHearSaufi()
      this.didIHearTask()
      animateDecider_in_bottomTop()
    },
    didIHearSaufi() {
      this.didIHearSaufiVar = Math.random() > 0.3
    },
    randomColor() {
      const length = this.gradients.length
      const color = Math.floor(Math.random() * (length - 0)) + 0
      this.bgColor = this.gradients[color].gradient
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
@import url('https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: 'Open Sans', sans-serif;
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
    margin-bottom: 20px;
  }
  .decider-elem  {
    box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
    border-radius: 1.7em;
    padding: 1.6em;
    margin: 15px;
  }
  .task-elem {
    margin: 15px;
  }
  .task {
    margin-bottom: 40px;
    max-height: var(--height);
    overflow-y: var(--overflow-hidden);
  }

  .heading {
    letter-spacing: -2px;
    font-size: 2.5em;
  }
  .subheading {
    margin: 0;
    font-family: 'Lobster Two', cursive;
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
  .gradient{
    margin-right: -15px;
    margin-left: -15px;
  }

.animation-task-enter-active {
    animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.animation-task-leave-active {
    animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.animation-task-enter, .animation-task-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}


@media only screen and (min-width: 500px) {
  .decider {
    text-align: center;
  }
}

@media only screen and (max-width: 450px) {
  .heading {
    font-size: 2.3em;
  }
}

@media only screen and (max-width: 410px) {
  .heading {
    font-size: 2.0em;
  }
}
@media only screen and (max-width: 360px) {
  .heading {
    font-size: 1.8em;
  }
}

/**
 * ----------------------------------------
 * animation scale-up-center
 * ----------------------------------------
 */
@keyframes slide-in-left {
    0% {
        transform: translateX(-50px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slide-in-right {
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(50px);
        opacity: 0;
    }
}

@keyframes slide-in-fwd-center {
    0% {
        transform: translateZ(-1400px);
        opacity: 0;
    }
    100% {
        transform: translateZ(0);
        opacity: 1;
    }
}


</style>
