<template>
    <div class="d-block settings">
        <div class="d-flex justify-content-center">
      <button class="close-modal" @click="$bvModal.hide('impressum-modal')"><BIconX class="h2" /></button>
      </div>
        <b-row class="justify-content-center mt-3">
<ToggleDarkModeButton/>
</b-row>
<b-row class="justify-content-center mt-4">
  <ToggleDifficulty/>
</b-row>
<b-row class="justify-content-center text-center mt-5">
  <b-col cols="11" md="8" lg="6">
  <router-link class="menu-link" :to="{name:'Explanation'}">Das Spiel <BIconChevronRight /></router-link>
  </b-col>
</b-row>
<b-row class="justify-content-center text-center mt-4">
  <b-col cols="11" md="8" lg="6">
  <router-link class="menu-link" :to="{name:'AboutUs'}">Über Uns <BIconChevronRight /></router-link>
  </b-col>
</b-row>
<b-row class="justify-content-center text-center mt-4">
  <b-col cols="11" md="8" lg="6">
  <router-link class="menu-link" :to="{name:'Changelog'}">Changelog <BIconChevronRight /></router-link>
  </b-col>
  </b-row>
  <b-row class="justify-content-center text-center mt-4">
    <b-col cols="11" md="8" lg="6">
  <a href="https://makemeacocktail.com/mybar/" class="menu-link" >Make Me A Cocktail <BIconChevronRight /></a>
  </b-col>
</b-row>
</div>
</template>
<script>
import { BIconX, BIconChevronRight } from 'bootstrap-vue'
import ToggleDarkModeButton from '@/components/ToggleDarkModeButton'
import ToggleDifficulty from '@/components/ToggleDifficulty'


  export default {
    name: 'ModalContent',
    components: {
      BIconX,
      ToggleDarkModeButton,
      ToggleDifficulty,
      BIconChevronRight
    }
  }
</script>
<style scoped>
  .settings{
    min-height: 100%;
    padding-top: 50px;
  }
  .dark-mode .close-modal, .dark-mode .menu-link{
    color:white;
  }

  .close-modal{
    border: none;
    font-weight: bold;
    background: none;
  }

  .menu-link{
    color: black;
    text-decoration: none;
    font-weight: bold;
  }
</style>
