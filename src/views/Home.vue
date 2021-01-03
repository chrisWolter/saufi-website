<template>
  <div>
    <b-container fluid>
      <b-row class="justify-content-md-center header">
        <b-col cols="2" md="1" class="header-wrapper dark-mode-button-wrapper">
          <button @click="toggleDarkMode()" class="header-buttons">
            <span v-if="!isDarkMode"><BIconMoon></BIconMoon></span>
            <span v-else><BIconSun></BIconSun></span>
          </button>
        </b-col>
        <b-col cols="8" md="4" class="header-wrapper">
          <h2 class="logo mx-0">Saufi?</h2>
        </b-col>
        <b-col cols="2" md="1" class="header-wrapper info-button-wrapper">
          <button class="header-buttons" v-b-modal.impressum-modal>
            <BIconInfoCircle></BIconInfoCircle>
          </button>
        </b-col>
      </b-row>
      <div class="content-container">
        <b-row id="saufi-decider" class="justify-content-md-center decider">
          <Decider :didIHearSaufi="didIHearSaufiVar" ref="decider" id="decider" class="decider-elem"
                   :style="{'background': bgColor}"
                   :class="{'wobble': activeAnimations.decider.wobble, 'scale-in-center': activeAnimations.decider.scaleInCenter}"/>
        </b-row>
        <b-row id="task-decider" class="justify-content-md-center task">
          <Task :tasks-json="tasksJson" :task-trigger="triggerButton" :show="didIHearTaskVar"
                :didIHearSaufi="didIHearSaufiVar" ref="task" id="task" class="task-elem"
                :class="{'slide-in-bottom': activeAnimations.task.slideInBottom}"/>
        </b-row>
        <b-row id="reload-button" class="justify-content-md-center pos-bottom">
          <b-col col md="6" class="mx-0">
            <b-button @click="reload()" block class="reload-button" :style="{'background': bgColor}">Hab ich Saufi
              gehört?
            </b-button>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <b-modal id="impressum-modal" title="Information" hide-footer>
      <modal-content></modal-content>
    </b-modal>
  </div>
</template>

<script>
import Decider from '@/components/Decider.vue'
import Task from '@/components/Task.vue'
import ModalContent from '@/components/ModalContent'
import { BIconInfoCircle, BIconMoon, BIconSun } from 'bootstrap-vue'

export default {
  name: 'App',
  components: {
    Decider,
    Task,
    ModalContent,
    BIconInfoCircle,
    BIconMoon,
    BIconSun
  },
  data () {
    return {
      gradients: [
        { gradient: 'linear-gradient(to right, #dce35b, #45b649)' }, /* Grün */
        { gradient: 'linear-gradient(to right, #f7b733, #fc4a1a)' }, /* Rot */
      ],
      didIHearSaufiVar: null,
      didIHearTaskVar: null,
      bgColor: String,
      taskHeight: String,
      tasksJson: null,
      triggerButton: false,
      isDarkMode: false,
      activeAnimations: {
        decider: {
          wobble: false,
          scaleInCenter: false
        },
        task: {
          slideInBottom: false
        }
      }
    }
  },
  async mounted () {
    const response = await this.axios
        .get('https://alexherrmi.github.io/json/tasks.json')
    this.tasksJson = response.data
    this.reload()
    const decider = this.$refs.decider.$el
    decider.addEventListener('animationend', () => {
      this.activeAnimations.decider.wobble = false
      this.activeAnimations.decider.scaleInCenter = false
    })
    const task = this.$refs.task.$el
    task.addEventListener('animationend', () => {
      this.activeAnimations.task.slideInBottom = false
    })
  },
  methods: {
    reload () {
      this.didIHearSaufi()
      this.didIHearTask()
      this.randomColor()
      this.animateDecider()
      this.animateTask()
    },
    didIHearSaufi () {
      this.didIHearSaufiVar = Math.random() > 0.4
    },
    randomColor () {
      if (this.didIHearSaufiVar) {
        this.bgColor = this.gradients[0].gradient
      } else {
        this.bgColor = this.gradients[1].gradient
      }
    },
    didIHearTask () {
      this.didIHearTaskVar = Math.random() < 0.45
      this.triggerButton = !this.triggerButton
    },
    toggleClass (id, className) {
      const el = document.getElementById(id)
      el.classList.add(className)
    },
    animateDecider () {
      if (this.didIHearSaufiVar) {
        this.activeAnimations.decider.scaleInCenter = true
      } else {
        this.activeAnimations.decider.wobble = true
      }
    },
    animateTask () {
      this.activeAnimations.task.slideInBottom = true
    },
    toggleDarkMode () {
      let body = document.getElementsByTagName('html')[0]
      let currentClass = body.className
      body.className = currentClass === 'dark-mode' ? 'light-mode' : 'dark-mode'
      this.isDarkMode = !this.isDarkMode
    }
  },

}
</script>

<style>
@import '../assets/animation.css';

.logo {
  text-align: center;
  padding: 20px 0;
  margin: 0 25px;
  font-family: 'Kalam', cursive;
  font-weight: 700;
}

.decider-elem {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
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

.pos-bottom {
  position: fixed;
  bottom: 30px;
  width: 100%;
  padding: 0px 15px;
}

.pos-bottom::after {
  content: '';
  position: absolute;
  background: -moz-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(255, 255, 255, 0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(255, 255, 255, 0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(255, 255, 255, 0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  width: 100%;
  left: 0;
  top: -60px;
  height: 140px;
  z-index: -1;
}

.reload-button {
  border-radius: 0.8em !important;
  height: 45px;
  font-size: 20px !important;
  font-weight: 700 !important;
  border: none !important;
  box-shadow: none !important;
  color: black !important;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2) !important;
}

.gradient {
  margin-right: -15px;
  margin-left: -15px;
}

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (min-width: 720px) {
  .info-button-wrapper {
    justify-content: flex-end;
  }

  .dark-mode-button-wrapper {
    justify-content: flex-start;
  }
}

.header-buttons,
.header-buttons:focus {
  background: none;
  border: none;
  outline: none;
  margin-top: -10px;
  font-size: 20px;
}

.dark-mode .header-buttons {
  color: white;
}

.dark-mode button.close {
  color: white;
  text-shadow: none;
  opacity: 0.75;
}

.header {
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0px;
  padding: 0 15px;
}

.header::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 80px;
  margin-left: -15px;
  background: -moz-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(255, 255, 255, 0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(255, 255, 255, 0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(255, 255, 255, 0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  transform: rotate(180deg);
}

.content-container {
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

</style>
