<template>
<b-container style="margin-bottom:100px">
    <b-row class="header justify-content-md-center">
        <b-col class="header-wrapper">
            <router-link :to="{name:'Home'}">zurück</router-link>
        </b-col>
    </b-row>
    <b-col class="d-block content">
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
    </b-container>
</template>
<script>
  export default {
    name: 'Explanation'
  }
</script>
<style scoped>
.header{
    position: fixed;
    z-index: 10;
    width: 100%;
    top: 0px;
    padding: 0 15px;
}
.header::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 60px;
  margin-left: -15px;
  background: -moz-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(255, 255, 255, 0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(255, 255, 255, 0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 65%, rgba(255, 255, 255, 0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  transform: rotate(180deg);
}

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

.header-wrapper {
  display: flex;
  align-items: center;
}
</style>