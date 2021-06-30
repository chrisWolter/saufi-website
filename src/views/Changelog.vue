<template>
<b-container style="margin-bottom:100px">
    <ModalHeader />
    <b-row class="justify-content-center">
    <b-col class="d-block content" cols="11" md="8" lg="6">
      <h4 class="mb-3">Changelog</h4>
      <div>
        <p class="mb-0">Version: 2.0.0</p>
        <p>Anpassen der Animationen</p>
      </div>
      <div>
        <p class="mb-0">Version: 1.1.1</p>
        <p>Anpassen der Animationen</p>
      </div>
            <div>
        <p class="mb-0">Version: 1.0.0</p>
        <p>Anpassen der Animationen</p>
      </div>
      <h4 class="mt-4">Roadmap</h4>
      <p>Wir werden dieses Trinkspiel weiterentwickeln und neue Ideen einfließen
        lassen. Allerdings kommen Major Updates unregelmäßig.
        Bugfixes und kleinere Anpassungen werden aber recht schnell erledigt und
        bereitgestellt.
      </p>
      <p class="mt-5">Aktuelle Version: 1.1.1</p>
      <div class="clippy"></div>
    </b-col>
    </b-row>
    </b-container>
</template>
<script>
import ModalHeader from '@/components/ModalHeader'
  export default {
    name: 'Explanation',
    components: {
      ModalHeader
    }
  }
</script>
<style scoped>
.content{
    position: relative;
    top: 3rem;
}
  .clippy {
    background-image: url("../assets/clippy.png");
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    background-size: cover;
    margin-bottom: -40px
  }
</style>