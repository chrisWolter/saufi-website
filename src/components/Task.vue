<template>
  <b-col col lg="6" sm="8">
    <div v-show="show">
      <div v-if="task" class="task">
        <h5 class="subheading">{{ task.category }}</h5>
        <h1 class="heading">{{ taskName }}</h1>
        <p>{{ task.description }}</p>
        <span class="schlucks">Schlucks: {{ schlucks }}</span>
        <div v-if="task.hint">
          <p class="hint pt-3 mt-5">{{ task.hint }}</p>
        </div>
      </div>
    </div>
    <div v-show="!show">
      <div v-if="!didIHearSaufi" class="no-task">
        <h3>Keine Zusatzaufgabe :(</h3>
        <h4 class="mt-4">Aber du darfst trotzdem einen Sipp nehmen.</h4>
      </div>
    </div>
  </b-col>
</template>

<script>
const weightedRandom = require("weighted-random");

export default {
  name: "Task",
  props: {
    tasksJson: {
      type: Array,
    },
    taskTrigger: {
      type: Boolean,
    },
    show: {
      type: Boolean,
    },
    didIHearSaufi: {
      type: Boolean,
    },
    schlucks: {
      type: Number,
    },
  },
  data() {
    return {
      task: null,
      taskNameToShow: null,
      selection: Number,
    };
  },
  methods: {
    getTask() {
      if (!this.tasksJson) {
        return;
      }
      const taskList = this.tasksJson;
      const weights = taskList.map((task) => task.weight);
      this.selection = weightedRandom(weights);
      const tasks = taskList[this.selection].data;
      const randomTaskIndex = Math.floor(Math.random() * tasks.length);
      return tasks[randomTaskIndex];
    },
  },
  computed: {
    taskName() {
      if (this.show) {
        if (this.task.name instanceof Array) {
          const random = Math.floor(Math.random() * this.task.name.length);
          let task = this.task.name[random];
          this.$emit("deleteTask", this.selection, this.task.category, random);
          return task;
        }
        this.$emit("deleteTask", this.selection, this.task.name);
      }
      return this.task.name;
    },
  },
  watch: {
    taskTrigger() {
      this.task = this.getTask();
    },
  },
};
</script>

<style scoped>
.dark-mode .task {
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
}
.task {
  padding: 1.6em 15px 1.6em 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 1.7em;
  word-break: break-word;
}
.no-task {
  text-align: center;
  color: rgb(160, 160, 160);
}

.schlucks {
  font-style: italic;
  font-weight: bold;
}

.hint {
  position: relative;
  color: #898989;
}

.hint::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  background: #424242;
  height: 4px;
}
</style>
