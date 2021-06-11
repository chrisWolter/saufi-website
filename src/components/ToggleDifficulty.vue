<template>
    <b-col cols="11" md="8" lg="6">
        <h4 class="mb-4">Saufi-Modus</h4>
        <b-row class="mt-3 difficulty-wrapper">
            <b-col cols="4">
                <button
                        class="difficulty-button radler"
                        :class="{ 'fill-bg': difficulty === 1 }"
                        @click="difficulty = 1">
                    Radlertrinker
                </button>
            </b-col>
            <b-col cols="4">
                <button
                        class="difficulty-button alki"
                        :class="{ 'fill-bg': difficulty === 2 }"
                        @click="difficulty = 2">
                    Alkoholiker
                </button>
            </b-col>
            <b-col cols="4">
                <button
                        class="difficulty-button raketen"
                        :class="{ 'fill-bg': difficulty === 3 }"
                        @click="difficulty = 3">
                    Raketendicht
                </button>
            </b-col>
        </b-row>
    </b-col>
</template>

<script>
export default {
    name: 'ToggleDifficulty',
    data() {
        return {
            difficulty: +localStorage.getItem('SaufiModus') || 3
        }
    },
    watch: {
        difficulty(newValue) {
            localStorage.setItem('SaufiModus', newValue)
        }
    },
}
</script>

<style scoped>
.difficulty-wrapper{
    font-size: 12px;
    font-weight: bold;
}

.difficulty-button{
    background-color: transparent;
    color: #212529;
    outline: none;
    border-radius: 10px;
    padding: 10px;
    border: 2px solid #212529;
}

.fill-bg {
    background: #212529;
    color: white;
}

</style>
