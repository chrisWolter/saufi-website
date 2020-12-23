<template>
    <b-col col md="6">
        <div v-if="task">
            <h5 class="subheading">{{task.category}}</h5>
            <h1 class="heading">{{task.name}}</h1>
            <p>{{task.description}}</p>
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
        // Because this.tasksJson is asnychronous
        setTimeout(() => {
            this.task = this.getTask()
        }, 100)

    },
    watch: {
        trigger() {
            this.task = this.getTask()
        }
    }
}
</script>

<style scoped>

</style>
