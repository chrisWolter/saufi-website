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
      }
    },
    computed: {
        task() {
            console.log(this.tasksJson);
            if(this.tasksJson) {
                let tasks = JSON.parse(JSON.stringify(this.tasksJson))
                let weights = tasks.map(task => task.weight)
                let selection = weightedRandom(weights)

                return tasks[selection]
            } else {
                return undefined
            }
      }
    }
}
</script>

<style scoped>

</style>
