<template>
  <div id="app">
    <b-container fluid>
        <b-row class="justify-content-md-center">
            <b-col col md="6">
                <h1 class="logo">Logo</h1>
            </b-col>
        </b-row>
        <b-row id="saufi-decider" class="justify-content-md-center decider">
          <Decider :didIHearSaufi="didIHearSaufiVar" class="decider-elem" :style="{color: didIHearSaufiVar ? '' : 'white', 'background': bgColor}"/>
        </b-row>
        <transition name="animation-task">
            <b-row v-show="didIHearTaskVar"  id="task-decider" class="justify-content-md-center task" :style="cssVars">
                <Task :tasks-json="tasksJson" class="task-elem"/>
            </b-row>
        </transition>

      <b-row id="reload-button" class="justify-content-md-center pos-bottom">
        <b-col col md="6">
          <b-button @click="reload()" block variant="primary" class="reload-button" :style="{color: didIHearSaufiVar ? 'black' : 'white', 'background': bgColor}">Hab ich Saufi gehört?</b-button>
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
      gradients: [
        {gradient: 'linear-gradient(to right, #dce35b, #45b649)'},
        {gradient: 'linear-gradient(to right, #ee0979, #ff6a00)'},
      ],
      didIHearSaufiVar: Boolean,
      didIHearTaskVar: Boolean,
      bgColor: String,
      taskHeight: String,
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
      this.didIHearSaufi()
      this.didIHearTask()
      this.randomColor()
      animateDecider_in_bottomTop()
    },
    didIHearSaufi() {
      this.didIHearSaufiVar = Math.random() > 0.3
    },
    randomColor() {
      console.log(this.didIHearSaufiVar)
      if(this.didIHearSaufiVar){
      this.bgColor = this.gradients[0].gradient
      }else{
        this.bgColor = this.gradients[1].gradient
      }
    },
    didIHearTask() {
      this.didIHearTaskVar = Math.random() < 0.25
    },
    setTaskStyle(){
      const viewHeigth = window.innerHeight
      const titleHeigth = document.getElementById('saufi-decider').getBoundingClientRect().bottom + 40
      const buttonPosition = document.getElementById('reload-button').getBoundingClientRect().top - 40
      const calculatedTaskHeight = viewHeigth - titleHeigth - (viewHeigth - buttonPosition)

      this.taskHeight = calculatedTaskHeight + 'px'
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
    padding: 20px 0;
    margin: 0 25px;
  }
  .decider {
    margin-bottom: 10px;
  }
  .decider-elem  {
    box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
    border-radius: 1.7em;
    padding: 1.6em;
    margin: 15px 25px;
  }
  .task-elem {
    margin: 15px 25px;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
    border-radius: 1.7em;
    padding: 1.6em;
  }
  .task {
    margin-bottom: 40px;
    max-height: var(--height);
    overflow-y: auto;
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

@media only screen and (max-width: 470px) {
  .heading {
    font-size: 2.3em;
  }
}

@media only screen and (max-width: 430px) {
  .heading {
    font-size: 2.0em;
  }
}
@media only screen and (max-width: 375px) {
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
