<template>
    <b-col col md="6" v-if="task">
        <div>
            <h6 class="subheading">Aufgabe</h6>
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
    props: ['didIHearSaufi'],
    computed: {
      task() {
          if (this.didIHearSaufi) {
              let tasks = [...tasksJSON]
              let weights = tasks.map(task => task.weight)
              let selection = weightedRandom(weights)

              return tasks[selection]
          }

          return undefined
      }
    }
}
</script>

<style scoped>

</style>
