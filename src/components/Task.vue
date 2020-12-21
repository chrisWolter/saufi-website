<template>
    <b-col col md="6">
        <div>
            <h6 class="subheading">Aufgabe</h6>
            <h1 class="heading">Mache etwas</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
        </div>
    </b-col>
</template>

<script>
export default {
    name: "Task",
    props: ['didIHearSaufi'],
    methods: {
        isSaufi(){
            if(this.didIHearSaufi){
                this.chooseCategory()
            }
        },
        chooseCategory() {
            
        }
    }
}
</script>

<style scoped>

</style>
