<template>
    <b-col col md="6">
        <div v-show="show">
            <div v-if="task" class="task">
                <h5 class="subheading">{{task.category}}</h5>
                <h1 class="heading">{{task.name}}</h1>
                <p>{{taskDesciption}}</p>
            </div>
        </div>
        <div v-show="!show">
            <div v-if="didIHearSaufi" class="no-task">
                <h3>Keine Zusatzaufgabe :(</h3>
                <h4 class="mt-4">Aber du darfst trotzdem einen Sipp nehmen.</h4>
            </div>
            <div v-else class="no-task">
                <h3>Keine Zusatzaufgabe :(</h3>
                <h4 class="mt-4">Leider darfst du auch nichts trinken.</h4>
            </div>
        </div>
    </b-col>
</template>

<script>
const weightedRandom = require('weighted-random')

export default {
    name: "Task",
    props: {
      tasksJson: {
          type: Array
      },
      taskTrigger: {
          type: Boolean
      },
      show: {
          type: Boolean
      },
      didIHearSaufi: {
          type: Boolean
      }
    },
    data() {
      return {
          task: null
      }
    },
    methods: {
      getTask () {
        if (!this.tasksJson) {
            return
        }

        const taskList = JSON.parse(JSON.stringify(this.tasksJson))
        const weights = taskList.map(task => task.weight)
        const selection = weightedRandom(weights)
        const tasks = taskList[selection].data
        const randomTaskIndex = Math.floor(Math.random() * tasks.length)
        return tasks[randomTaskIndex]
      }
    },
    computed: {
        taskDesciption() {
            if(this.task.description instanceof Array) {
                const random = Math.floor(Math.random() * this.task.description.length)
                return this.task.description[random]
            }
            return this.task.description
        }
    },
    created() {
        this.task = this.getTask()
    },
    watch: {
        taskTrigger() {
            this.task = this.getTask()
        }
    }
}
</script>

<style scoped>
    .dark-mode .task {
        box-shadow: 0 0 5px rgba(255,255,255,0.4);
    }
    .task {
        padding: 1.6em 15px 1.6em 15px;
        box-shadow: 0 0 5px rgba(0,0,0,0.2);
        border-radius: 1.7em;
        word-break: break-word;
    }
    .no-task {
        text-align: center;
        color: rgb(160, 160, 160);
    }
</style>
