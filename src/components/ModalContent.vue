<template>
    <div class="d-block settings">
        <div class="d-flex justify-content-center">
      <button class="close-modal" @click="$bvModal.hide('impressum-modal')"><BIconX class="h2" /></button>
      </div>
      <div class="settings-wrapper">
        <b-row class="justify-content-center">
<ToggleDarkModeButton/>
</b-row>
<b-row class="justify-content-center">
  <ToggleDifficulty/>
</b-row>
</div>
    </div>
</template>
<script>
import { BIconX } from 'bootstrap-vue'
import ToggleDarkModeButton from '@/components/ToggleDarkModeButton'
import ToggleDifficulty from '@/components/ToggleDifficulty'


  export default {
    name: 'ModalContent',
    components: {
      BIconX,
      ToggleDarkModeButton,
      ToggleDifficulty
    }
  }
</script>
<style scoped>
  .settings{
    min-height: 100%;
    padding-top: 50px;
  }
  .dark-mode .close-modal{
    color:white;
  }

  .close-modal{
    border: none;
    font-weight: bold;
    background: none;
  }

  .settings-wrapper * {
    margin-top: 20px;
  }
</style>
