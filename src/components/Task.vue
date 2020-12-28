<template>
    <b-col col md="6">
        <div v-show="show">
            <div v-if="task" class="task">
                <h5 class="subheading">{{task.category}}</h5>
                <h1 class="heading">{{task.name}}</h1>
                <p>{{task.description}}</p>
            </div>
        </div>
        <div v-show="!show">
            <h3 class="no-task">Keine Zusatzaufgabe :(</h3>
        </div>
    </b-col>
</template>

<script>
let weightedRandom = require('weighted-random')

export default {
    name: "Task",
    props: {
      tasksJson: {
          type: Array
      },
      trigger: {
          type: Boolean
      },
      show: {
          type: Boolean
      }
    },
    data() {
      return {
          task: null
      }
    },
    methods: {
        getTask() {
            if(this.tasksJson) {
                let tasks = JSON.parse(JSON.stringify(this.tasksJson))
                let weights = tasks.map(task => task.weight)
                let selection = weightedRandom(weights)

                return tasks[selection]
            } else {
                return undefined
            }
        }
    },
    created() {
        this.task = this.getTask()
    },
    watch: {
        trigger() {
            this.task = this.getTask()
        }
    }
}
</script>

<style scoped>
    .task {
        padding: 1.6em 15px 1.6em 15px;
        box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
        border-radius: 1.7em;
    }
    .no-task {
        text-align: center;
        color: rgb(160, 160, 160);
    }
</style>
