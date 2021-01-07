<template>
  <button @click="toggleDarkMode" class="header-buttons">
    <template v-if="isDarkMode">
      <BIconMoon/>
    </template>
    <template v-else>
      <BIconSun/>
    </template>
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
  mounted () {
    if(localStorage.getItem('SaufiDarkMode') === 'true'){
      this.toggleDarkMode()
    }
  },
  methods: {
    toggleDarkMode () {
      this.isDarkMode = !this.isDarkMode
      this.localStoreDarkMode(this.isDarkMode)
      document.querySelector('html').classList.toggle('dark-mode')
    },
    localStoreDarkMode (isDarkMode) {
      localStorage.setItem('SaufiDarkMode', isDarkMode)
    }
  },
}
</script>
