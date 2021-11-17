<template>
<b-container style="margin-bottom:100px">
    <ModalHeader />
    <b-row class="justify-content-center">
    <b-col class="d-block content" cols="11" md="8" lg="6">
      <h4>About Us</h4>
      <p>Diese Website wurde mit viel Herz und Alkohol von Alexander Herrmann
        und Christian Wolter entwickelt. Bei Fragen, Anregungen oder Ideen für
        Spiele könnt Ihr uns einfach eine Email schreiben.</p>
        <a href="mailto:alex@hab-ich-saufi-gehoert.de">Mail an Alex</a>
        <br />
        <a href="mailto:chris@hab-ich-saufi-gehoert.de" class="mt-4">Mail an Chris</a>
      <h4 class="mt-4">Rechtliches</h4>
      <div>Infoicon made by
        <a href="https://www.flaticon.com/authors/freepik"
          title="Freepik">Freepik
        </a> from
        <a href="https://www.flaticon.com/"
          title="Flaticon">www.flaticon.com
        </a>
      </div>
      <div>Favicon made by
        <a href="https://www.iconarchive.com/artist/paomedia.html"
          title="Iconarchive">paomedia
        </a>
          from
        <a href="https://www.paomedia.com/"
          title="paomedia">www.paomedia.com
        </a>
      </div>
      <p class="mt-4">Aktuelle Version: 1.1.1</p>
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
    top: 2rem;
}
</style>