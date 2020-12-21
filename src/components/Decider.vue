<template>
    <b-col col md="6" >
        <div>
            <h6 class="subheading">Saufi </h6>
            <h1 class="heading">Du hast saufi gehört</h1>
            <h1>{{ didIHearSaufi }}</h1>
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
