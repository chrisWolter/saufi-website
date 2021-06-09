<template>
    <div class="d-block settings">
        <div class="d-flex justify-content-center">
      <button class="close-modal" @click="$bvModal.hide('impressum-modal')"><BIconX class="h2" /></button>
      </div>
  <div class="d-flex toggle-wrapper">
    <label for="switch_1" class="mb-0">Darkmode</label>
    <b-form-checkbox  id="switch_1" name="check-button" switch size="lg" class="ml-auto toggle">
    </b-form-checkbox>
  </div>
    <div class="d-flex toggle-wrapper">
    <label for="switch_2" class="mb-0">Aufgaben</label>
    <b-form-checkbox  id="switch_2" name="check-button" switch size="lg" class="ml-auto toggle">
    </b-form-checkbox>
  </div>
    </div>
</template>
<script>
import { BIconX } from 'bootstrap-vue'

  export default {
    name: 'ModalContent',
    components: {
      BIconX,
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
