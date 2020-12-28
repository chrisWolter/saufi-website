<template>
  <div id="app">
    <b-container fluid>
        <b-row class="justify-content-md-center header">
          <b-col cols="8" offset="2" md="4" offset-md="1" class="header-wrapper">
          <h2 class="logo mx-0">Saufi?</h2>
          </b-col>
          <b-col cols="2" md="1" class="header-wrapper info-button-wrapper">
            <button class="impressum-button" v-b-modal.impressum-modal>
              <img src="./assets/information-icon.png" class="info-icon">
            </button>
          </b-col>
        </b-row>
        <div class="content-container">
          <b-row id="saufi-decider" class="justify-content-md-center decider">
            <Decider :didIHearSaufi="didIHearSaufiVar" id="decider" class="decider-elem" :style="{'background': bgColor}"/>
          </b-row>
          <b-row id="task-decider" class="justify-content-md-center task" >
            <Task :tasks-json="tasksJson" :trigger="triggerButton" :show="didIHearTaskVar" id="task" class="task-elem"/>
          </b-row>

        <b-row id="reload-button" class="justify-content-md-center pos-bottom">
          <b-col col md="6" class="mx-0">
            <b-button @click="reload()" block class="reload-button" :style="{'background': bgColor}">Hab ich Saufi gehört?</b-button>
          </b-col>
        </b-row>
      </div>
    </b-container>

      <b-modal id="impressum-modal" title="Information" hide-footer>
    <div class="d-block">
      <h4>Allgemeine Infos</h4>
      <p>Diese Website wurde mit viel Herz und Alkohol von Alexander Herrmann
        und Christian Wolter entwickelt. Bei Fragen, Anregungen oder Ideen für Spiele könnt Ihr uns einfach eine Emails schreiben.</p>
        <a href="mailto:alex@hab-ich-saufi-gehoert.de">Mail an Alex</a>
        <br />
        <a href="mailto:chris@hab-ich-saufi-gehoert.de" class="mt-4">Mail an Chris</a>
        <br />
        <p class="mt-4">Vielen Dank an Manuel und Max, die uns bei der Erstellung der Aufgaben geholfen haben.</p>
        <p>Ein Dank geht auch an alle Beta tester raus, deren Lebern das Spiel nicht so gefeiert haben</p>

      <h4>Roadmap</h4>
      <p>Wir arbeiten derweil schon an einer neuen Version von Hab ich Saufi gehört. Also seit gespannt was da auf euch irgendwann zukommt.
        Wir können nur soviel verraten: Lobbysystem und noch mehr Spaß!</p>
    </div>
  </b-modal>
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
      gradients: [
        {gradient: 'linear-gradient(to right, #dce35b, #45b649)'}, /* Grün */
        {gradient: 'linear-gradient(to right, #f7b733, #fc4a1a)'}, /* Rot */
      ],
      didIHearSaufiVar: Boolean,
      didIHearTaskVar: Boolean,
      bgColor: String,
      taskHeight: String,
      tasksJson: null,
      triggerButton: false,
    }
  },
  async mounted() {
    await this.axios
        .get('https://alexherrmi.github.io/json/tasks.json')
        .then(resp =>
          this.tasksJson = resp.data
        )
    this.reload()
    const el = document.getElementById('decider')
    el.addEventListener('animationend', e => {
      e.target.classList.remove('wobble')
      e.target.classList.remove('scale-in-center')
    })
    document.getElementById('task').addEventListener('animationend', e => {
      e.target.classList.remove('slide-in-bottom')
    })
  },
  methods: {
    reload() {
      this.didIHearSaufi()
      this.didIHearTask()
      this.randomColor()
      this.animate()
      this.animateTask()
    },
    didIHearSaufi() {
      this.didIHearSaufiVar = Math.random() > 0.4
    },
    randomColor() {
      if(this.didIHearSaufiVar){
      this.bgColor = this.gradients[0].gradient
      }else{
        this.bgColor = this.gradients[1].gradient
      }
    },
    didIHearTask() {
      this.didIHearTaskVar = Math.random() < 0.45
      this.triggerButton = !this.triggerButton
     },
     toggleClass (id, className) {
       const el = document.getElementById(id)
       el.classList.add(className)
     },
     animate() {
       if(this.didIHearSaufiVar){
         this.toggleClass('decider', 'scale-in-center')
       }else{
         this.toggleClass('decider', 'wobble')
       }
     },
     animateTask() {
         this.toggleClass('task', "slide-in-bottom")
       }
     }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap');
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: white
  }
  #app {
  min-width: 100%;
  min-height: 100%;
  }
  .logo {
    text-align: center;
    padding: 20px 0;
    margin: 0 25px;
    font-family: 'Kalam', cursive;
    font-weight: 700;
  }
  .decider-elem  {
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
    border-radius: 1.7em;
    padding: 1em;
    margin: 15px 25px;
    color: black;
  }
  .task-elem {
    margin: 15px 30px 120px 30px;
    padding: 0 !important;
  }

  .heading {
    letter-spacing: -2px;
    font-size: 2.5em;
    font-weight: 700;
  }
  .subheading {
    margin: 0;
    font-weight: 400;
    font-family: 'Kalam', cursive;
    font-style: italic;
  }
  .pos-bottom{
    position: fixed;
    bottom: 30px;
    width: 100%;
    padding: 0px 15px;
  }
  .pos-bottom::after {
      content: '';
      position: absolute;
      background: -moz-linear-gradient(top,  rgba(255,255,255,1) 0%, rgba(255,255,255,1) 65%, rgba(255,255,255,0) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(255,255,255,1) 65%,rgba(255,255,255,0) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to top,  rgba(255,255,255,1) 0%,rgba(255,255,255,1) 65%,rgba(255,255,255,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      width: 100%;
      left: 0;
      top: -60px;
      height: 140px;
      z-index: -1;
  }
  .reload-button{
    border-radius: 0.8em !important;
    height: 45px;
    font-size: 20px !important;
    font-weight: 700 !important;
    border: none !important;
    box-shadow: none !important;
    color: black !important;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.2) !important;
  }
  .gradient{
    margin-right: -15px;
    margin-left: -15px;
  }

  .info-icon{
    width: 20px;
    height: 20px;
  }

  .header-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
  }

@media screen and (min-width: 720px){
  .info-button-wrapper{
    justify-content: flex-end;
  }
}

  .impressum-button,
  .impressum-button:focus{
    background: none;
    border: none;
    outline: none;
    margin-top: -10px
  }

  .header{
    position: fixed;
    width: 100%;
    z-index: 10;
    top: 0px;
    padding: 0 15px;
  }

  .header::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 80px;
    margin-left: -15px;
    background: -moz-linear-gradient(bottom,  rgba(255,255,255,1) 0%, rgba(255,255,255,1) 65%, rgba(255,255,255,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(bottom,  rgba(255,255,255,1) 0%,rgba(255,255,255,1) 65%,rgba(255,255,255,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(255,255,255,1) 0%,rgba(255,255,255,1) 65%,rgba(255,255,255,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }

  .content-container{
    margin-top: 60px;
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

@media only screen and (max-width: 350px) {
    .heading {
        font-size: 1.6em;
    }
}

/* Animation */

.wobble {
	-webkit-animation: wobble 0.5s linear both;
	animation: wobble 0.5s linear both;
}

@-webkit-keyframes wobble {
  0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
            transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
            transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
            transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
            transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
            transform: translateX(-6px) rotate(-1.2deg);
  }
}
@keyframes wobble {
  0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
            transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
            transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
            transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
            transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
            transform: translateX(-6px) rotate(-1.2deg);
  }
}

.scale-in-center {
	-webkit-animation: scale-in-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: scale-in-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0.6);
            transform: scale(0.6);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0.6);
            transform: scale(0.6);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}

.slide-in-bottom {
	-webkit-animation: slide-top 0.2s ease-in-out 0.25s both;
	animation: slide-top 0.2s ease-in-out 0.25s both;
}

@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(80px);
    transform: translateY(80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-top {
  0% {
    -webkit-transform: translateY(80px);
    transform: translateY(80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

</style>
