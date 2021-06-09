<template>
  <div>
    <b-container fluid>
      <b-row class="justify-content-md-center header">
        <b-col cols="2" md="1" class="header-wrapper dark-mode-button-wrapper">
          <ToggleDarkModeButton/>
        </b-col>
        <b-col cols="8" md="4" class="header-wrapper">
          <h2 class="logo mx-0">Saufi?</h2>
        </b-col>
        <b-col cols="2" md="1" class="header-wrapper info-button-wrapper">
          <button class="header-buttons" v-b-modal.impressum-modal>
            <BIconInfoCircle/>
          </button>
        </b-col>
      </b-row>
      <div class="content-container">
        <b-row id="saufi-decider" class="justify-content-md-center decider">
          <Decider :didIHearSaufi="didIHearSaufi" ref="decider" id="decider" class="decider-elem"
                   :style="{'background': themeColor}"
                   :class="{'wobble': activeAnimations.decider.wobble, 'scale-in-center': activeAnimations.decider.scaleInCenter}"/>
        </b-row>
        <b-row id="task-decider" class="justify-content-md-center task">
          <Task :tasks-json="tasksJson" :task-trigger="triggerButton" :show="didIHearTask"
                :didIHearSaufi="didIHearSaufi" ref="task" id="task" class="task-elem"
                :class="{'slide-in-bottom': activeAnimations.task.slideInBottom}"/>
        </b-row>
        <b-row id="reload-button" class="justify-content-md-center pos-bottom">
          <b-col col md="6" class="mx-0 px-sm-0">
            <button @click="reload()" block class="reload-button w-100" :style="{'background': themeColor}"> <span class="mr-3"> <BIconArrowRepeat /> </span>Hab ich Saufi
              gehört?
            </button>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <b-modal id="impressum-modal" hide-header hide-footer>
      <modal-content/>
    </b-modal>
  </div>
</template>

<script>
import Decider from '@/components/Decider.vue'
import Task from '@/components/Task.vue'
import ModalContent from '@/components/ModalContent'
import { BIconInfoCircle } from 'bootstrap-vue'
import ToggleDarkModeButton from '@/components/ToggleDarkModeButton'

export default {
  name: 'App',
  components: {
    ToggleDarkModeButton,
    Decider,
    Task,
    ModalContent,
    BIconInfoCircle
  },
  data () {
    return {
      gradients: {
        red: 'linear-gradient(to right, #dce35b, #45b649)',
        green: 'linear-gradient(to right, #f7b733, #fc4a1a)'
      },
      didIHearSaufi: null,
      didIHearTask: null,
      taskHeight: String,
      tasksJson: null,
      triggerButton: false,
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
    await this.fetchTasks()
    this.reload()
    this.stopAnimations()
  },
  methods: {
    reload () {
      this.rollDidIHearSaufiDice()
      this.rollDidIHearTaskDice()
      this.animateDecider()
      this.animateTask()
    },
    async fetchTasks() {
      const response = await this.axios
          .get('https://alexherrmi.github.io/json/tasks.json')
      this.tasksJson = response.data
    },
    stopAnimations() {
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
    rollDidIHearSaufiDice () {
      this.didIHearSaufi = Math.random() > 0.4
    },
    rollDidIHearTaskDice () {
      this.didIHearTask = Math.random() < 0.45
      this.triggerButton = !this.triggerButton
    },
    animateDecider () {
      if (this.didIHearSaufi) {
        this.activeAnimations.decider.scaleInCenter = true
      } else {
        this.activeAnimations.decider.wobble = true
      }
    },
    animateTask () {
      this.activeAnimations.task.slideInBottom = true
    },
  },
  computed: {
    themeColor() {
      return this.didIHearSaufi ? this.gradients.red : this.gradients.green
    }
  }

}
</script>

<style scoped>
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
  border-radius: 0.8em;
  height: 45px;
  font-size: 20px;
  font-weight: 700;
  border: none;
  color: black;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
}

.reload-button:focus{
  outline: none;
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

::v-deep .modal-dialog{
  margin: 0;
  min-height: 100%;
}

::v-deep .modal-content{
  backdrop-filter: blur(20px);
  position: absolute;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 0;
  border: none;
  }

</style>
