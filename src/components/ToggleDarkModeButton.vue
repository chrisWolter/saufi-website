<template>
<b-col cols="11" md="8" lg="6">
  <div class="d-flex toggle-wrapper">
    <label for="DarkmodeSwitch" class="mb-0">Darkmode</label>
<label class="switch ml-auto toggle">
  <input type="checkbox" v-model="isDarkMode" @change="toggleDarkMode" checked>
  <span class="slider round"></span>
</label>
  </div>
  </b-col>
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

  .toggle-wrapper label{
    font-size: 24px;
    font-weight: bold;
  }
  .toggle{
    align-self: center;
    margin-top: 6px;
  }

  .switch {
  position: relative;
  display: inline-block;
  width: 46px;
  height: 24px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(51, 51, 51);
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background: #45b649;
}

input:checked + .slider:before {
  -webkit-transform: translateX(23px);
  -ms-transform: translateX(23px);
  transform: translateX(23px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>
