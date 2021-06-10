<template>
    <b-col cols="11" md="8" lg="6">
        <h5 class="text-center">Schwierigkeitsgrad</h5>
        <b-row class="mt-3 difficulty-wrapper"> 
            <b-col cols="4"><button class="difficulty-button" @click="ToggleDifficulty(1)">Radlertrinker</button></b-col>
            <b-col cols="4"><button class="difficulty-button">Alkoholiker</button></b-col>
            <b-col cols="4"><button class="difficulty-button">Raketendicht</button></b-col>
        </b-row>
    </b-col>
</template>
    
<script>
export default {
    methods: {
        ToggleDifficulty(difficulty){
            return difficulty
        }
    }
}
</script>

<style scoped>
.difficulty-wrapper{
    font-size: 12px;
}

.difficulty-button{
    border: none;
    background-color: transparent;
    color: white;
    outline: none;
}

</style>