<template>
    <b-col col lg="6" sm="8">
        <div>
            <h5 class="subheading">{{ didIHearSaufi ? 'Yippie' : 'Schade'}}</h5>
            <h1 class="heading">{{ didIHearSaufi ? 'Du hast Saufi gehört!': 'Du hast kein Saufi gehört!'}}</h1>
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
