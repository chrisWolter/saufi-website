<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap');
@import './assets/animation.css';

html, body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

.dark-mode, .dark-mode body {
  background: #000814;
  color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

.dark-mode .modal-content {
  background: rgba(0, 8, 20, 0.6) !important;
  color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

.dark-mode .modal-content .difficulty-button {
  border: 2px solid white;
  color: white;
}

.dark-mode .modal-content .fill-bg {
  background: white;
  color: black;
}

.dark-mode .modal-content .tooltip-trigger {
  color: white;
}

.dark-mode #reload-button::after, .dark-mode .header::before {
  background: -moz-linear-gradient(top, rgba(0, 8, 20, 1) 0%, rgba(0, 8, 20, 1) 65%, rgba(0, 8, 20, 0) 100%) !important; /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(0, 8, 20, 1) 0%, rgba(0, 8, 20, 1) 65%, rgba(0, 8, 20, 0) 100%) !important; /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to top, rgba(0, 8, 20, 1) 0%, rgba(0, 8, 20, 1) 65%, rgba(0, 8, 20, 0) 100%) !important; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}

#app {
  min-width: 100%;
  min-height: 100%;
}


.heading {
  letter-spacing: -2px;
  font-size: 2.5em;
  font-weight: 700;
}

.subheading {
  margin: 0;
  font-weight: 400;
  font-family: 'Kalam', cursive;
  font-style: italic;
}

@media only screen and (min-width: 500px) {
  .decider {
    text-align: center;
  }
}

@media only screen and (max-width: 470px) {
  .heading {
    font-size: 2.3em;
  }
}

@media only screen and (max-width: 430px) {
  .heading {
    font-size: 2.0em;
  }
}

@media only screen and (max-width: 375px) {
  .heading {
    font-size: 1.8em;
  }
}

@media only screen and (max-width: 350px) {
  .heading {
    font-size: 1.6em;
  }
}

</style>
