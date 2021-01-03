<template>
  <button @click="toggleDarkMode" class="header-buttons">
    <span v-if="!isDarkMode"><BIconMoon></BIconMoon></span>
    <span v-else><BIconSun></BIconSun></span>
  </button>
</template>
<script>
export default {
  name: 'ToggleDarkModeButton',
  data () {
    return {
      isDarkMode: false
    }
  },
  methods: {
    toggleDarkMode () {
      let body = document.getElementsByTagName('html')[0]
      let currentClass = body.className
      body.className = currentClass === 'dark-mode' ? 'light-mode' : 'dark-mode'
      this.isDarkMode = !this.isDarkMode
    }
  },
}
</script>
