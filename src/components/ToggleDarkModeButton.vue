<template>
  <div class="d-flex toggle-wrapper">
    <label for="DarkmodeSwitch" class="mb-0">Darkmode</label>
    <b-form-checkbox v-model="isDarkMode" @change="toggleDarkMode" id="DarkmodeSwitch" name="DarkmodeSwitch" switch size="lg" class="ml-auto toggle">
    </b-form-checkbox>
  </div>
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
      this.isDarkMode = true
      this.toggleDarkMode()
    }
  },
  methods: {
    toggleDarkMode () {
      this.localStoreDarkMode(this.isDarkMode)
      if(!document.querySelector('html').classList.contains('dark-mode') && this.isDarkMode === true || document.querySelector('html').classList.contains('dark-mode') && this.isDarkMode === false){
      document.querySelector('html').classList.toggle('dark-mode')
      }
    },
    localStoreDarkMode (isDarkMode) {
      localStorage.setItem('SaufiDarkMode', isDarkMode)
    }
  },
}
</script>

<style scoped>
  .toggle-wrapper {
    position: relative;
    width: 80%;
    left: 10%;
    margin-top: 20px;
  }

  .toggle-wrapper label{
    font-size: 24px;
    font-weight: bold;
  }
  .toggle{
    align-self: center;
  }
</style>
