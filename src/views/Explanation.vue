<template>
<b-container style="margin-bottom:100px">
    <b-row class="header justify-content-md-center">
        <b-col class="header-wrapper">
            <router-link :to="{name:'Home'}">zurück</router-link>
        </b-col>
    </b-row>
    <b-col class="d-block content">
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
        #drinkresponsibly #dontdrinkanddrive
      </p>
      <h4>Allgemeine Infos</h4>
      <p>Diese Website wurde mit viel Herz und Alkohol von Alexander Herrmann
        und Christian Wolter entwickelt. Bei Fragen, Anregungen oder Ideen für
        Spiele könnt Ihr uns einfach eine Email schreiben.</p>
        <a href="mailto:alex@hab-ich-saufi-gehoert.de">Mail an Alex</a>
        <br />
        <a href="mailto:chris@hab-ich-saufi-gehoert.de" class="mt-4">Mail an Chris</a>
      <h4 class="mt-4">Roadmap</h4>
      <p>Wir werden dieses Trinkspiel weiterentwickeln und neue Ideen einfließen
        lassen. Allerdings kommen Major Updates unregelmäßig.
        Bugfixes und kleinere Anpassungen werden aber recht schnell erledigt und
        bereitgestellt.
      </p>
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
    margin-bottom: -30px
  }

.header-wrapper {
  display: flex;
  align-items: center;
}
</style>