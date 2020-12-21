<template>
    <b-col col md="6" >
        <div>
            <h6 class="subheading">{{ didIHearSaufi ? 'Yippie' : 'Schade'}}</h6>
            <h1 class="heading">{{ didIHearSaufi ? 'Sie haben Saufi gehört!': 'Sie haben kein Saufi gehört!'}}</h1>
        </div>
    </b-col>
</template>

<script>
export default {
  name: 'Decider',
  props: ['didIHearSaufi']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
