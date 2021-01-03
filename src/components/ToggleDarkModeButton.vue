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
  methods: {
    toggleDarkMode () {
      this.isDarkMode = !this.isDarkMode
      document.querySelector('html').classList.toggle('dark-mode')
    }
  },
}
</script>
