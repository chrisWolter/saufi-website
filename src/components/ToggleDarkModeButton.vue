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
      this.isDarkMode = !this.isDarkMode
      document.querySelector('html').classList.toggle('dark-mode')
    }
  },
}
</script>
