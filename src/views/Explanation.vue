<template>
<b-container style="margin-bottom:100px">
    <ModalHeader />
    <b-row class="justify-content-center">
    <b-col class="d-block content" cols="11" md="8" lg="6">
      <h4 class="mb-3">Das Spiel</h4>
      <p>Ihr wollt wissen, ob Ihr Saufi gehört habt? Say no more.
        <br />
        Bei dem Spiel "Hab ich Saufi gehört" wird das Handy herumgereicht und
        ihr bekommt angezeigt, ob ihr Saufi gehört habt oder eben nicht.
        Wenn Ihr Saufi gehört habt, dann müsst ihr etwas trinken. Was Ihr trinkt
        ist uns egal. Wieviel Ihr trinkt, könnt ihr, bevor ihr anfangt selbst
        festlegen. Wenn Ihr kein Saufi gehört habt, dann trinkt Ihr nichts. In dem
        man auf den Knopf am unteren Ende der Seite drückt, werden
        die Würfel neu gerollt und der nächste Spieler hat die Möglichkeit seiner
        Leber zu schaden oder eben nicht.
        Es kann vorkommen das euch zusätzlich noch Aufgaben angezeigt werden.
        Diese solltet Ihr zusätzlich zum Trinken oder nicht Trinken erledigen. Es kann
        also vorkommen, dass ihr kein Saufi gehört habt (also nichts trinken) und trotzdem
        eine Aufgabe erledigen müsst. Was Ihr bei der Aufgabe machen müsst, wird auf der
        Aufgabenkarte erklärt.
        <br />
        <br />
        #drinkresponsibly #dontdrinkanddrive
      </p>
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
  margin-bottom: -30px
}
</style>