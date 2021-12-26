<template>
<b-container style="margin-bottom:100px">
    <ModalHeader />
    <b-row class="justify-content-center">
    <b-col class="d-block content" cols="11" md="8" lg="6">
      <h4 class="mb-3">Changelog</h4>
                  <div>
        <p class="mb-0"><b>Version 2.1.1</b></p>
        <ul>
          <li>Kategorie fällt bei Spielen weg und dadurch wird die Aufgabe größer angezeigt</li>
          <li>Update der Spiele</li>
          <li>Typo Korrektur</li>
          <li>Saufi wahrscheinlichkeit bleibt gleich. Nur die Schlucks ändern sich</li>
        </ul>
      </div>
            <div>
        <p class="mb-0"><b>Version 2.1.0</b></p>
        <ul>
          <li>Hinweistext für unklare Spiele / Aufgaben wurde hinzugefügt</li>
          <li>Neue überarbeitete Aufgaben eingebunden</li>
          <li>Du kannst die Website nun als App installieren</li>
        </ul>
      </div>
      <div>
        <p class="mb-0"><b>Version 2.0.0</b></p>
        <ul>
          <li>Neues Menü</li>
          <li>Hinzufügen von neuen Aufgaben</li>
          <li>Einstellung der "Schwierigkeitsstufe"</li>
          <li>Entfernen von sich wiederholenden Aufgaben</li>
          <li>Beheben von Designfehlern</li>
        </ul>
      </div>
      <div>
        <p class="mb-0"><b>Version 1.1.1</b></p>
        <ul>
          <li>Style Updates</li>
          <li>Implementierung Darkmode</li>
        </ul>
      </div>
            <div>
        <p class="mb-0"><b>Version 1.0.0</b></p>
        <ul>
          <li>Erstveröffentlichung</li>
        </ul>
      </div>
      <h4 class="mt-4">Roadmap</h4>
      <p>Wir werden dieses Trinkspiel weiterentwickeln und neue Ideen einfließen
        lassen. Allerdings kommen Major Updates unregelmäßig.
        Bugfixes und kleinere Anpassungen werden aber recht schnell erledigt und
        bereitgestellt.
      </p>
      <p class="mt-5">Aktuelle Version: 2.1.0</p>
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
