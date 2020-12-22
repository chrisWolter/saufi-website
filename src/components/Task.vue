<template>
    <b-col col md="6">
        <div>
            <h6 class="subheading">{{task.category}}</h6>
            <h1 class="heading">{{task.name}}</h1>
            <p>{{task.description}}</p>
        </div>
    </b-col>
</template>

<script>
import tasksJSON from '../assets/tasks'
let weightedRandom = require('weighted-random')

export default {
    name: "Task",
    computed: {
      task() {
          let tasks = [...tasksJSON]
          let weights = tasks.map(task => task.weight)
          let selection = weightedRandom(weights)

          return tasks[selection]
      }
    }
}
</script>

<style scoped>

</style>
