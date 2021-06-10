<template>
    <div class="d-block settings">
        <div class="d-flex justify-content-center">
      <button class="close-modal" @click="$bvModal.hide('impressum-modal')"><BIconX class="h2" /></button>
      </div>
<ToggleDarkModeButton/>
    </div>
</template>
<script>
import { BIconX } from 'bootstrap-vue'
import ToggleDarkModeButton from '@/components/ToggleDarkModeButton'


  export default {
    name: 'ModalContent',
    components: {
      BIconX,
      ToggleDarkModeButton,
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

</style>
