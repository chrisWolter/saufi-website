<template>
    <div class="d-block">
      <h4>Das Spiel</h4>
      <p>Ihr wollt wissen ob Ihr Saufi gehört habt? Say no more.
        <br />
        Bei dem Spiel "Hab ich Saufi gehört" wird das Handy herumgereicht und
        ihr bekommt angezeigt, ob ihr Saufi gehört habt oder eben nicht. In dem
        man auf den Knopf am unteren Ende der Seite drückt, werden
        die Würfel neu gerollt und der nächste Spieler hat die möglich seiner
        Leber zu schaden oder eben nicht. Wenn Ihr Saufi gehört habt, dann müsst
        ihr etwas trinken. Was Ihr trinkt ist uns egal. Wieviel Ihr trinkt könnt
        ihr bevor ihr anfangt selber festlegen.
        Es kann vorkommen das euch zusätzlich noch Aufgaben angezeigt werden.
        Diese solltet Ihr zusätzlich zum trinken oder nicht trinken erledigen.
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
        Bugfixes und kleinere Anpassungen werden wir aber nachbessern.
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
      <p class="mt-4">Aktuelle Version: 1.8.7</p>
      <div class="clippy"></div>
    </div>
</template>
<script>
  export default {
    name: 'ModalContent'
  }
</script>
<style scoped>
  .clippy {
    background-image: url("../assets/clippy.png");
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    background-size: cover;
  }
</style>
