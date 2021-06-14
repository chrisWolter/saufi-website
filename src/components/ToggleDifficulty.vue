<template>
    <b-col cols="11" md="8" lg="6">
        <div class="heading-container">
            <h4 class="mb-4 saufi-heading">Saufi-Modus</h4>
            <b-button id="tooltip-target-1" class="tooltip-trigger"  variant="link">
                <BIconQuestionCircle></BIconQuestionCircle>
            </b-button>
            <b-tooltip target="tooltip-target-1" triggers="hover">
                Radlertrinker: 1-3 Schlucks
                Alkoholiker: 2-4 Schlucks
                Raketendicht: 3-5 Schlucks
            </b-tooltip>
        </div>
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

import { BIconQuestionCircle } from 'bootstrap-vue'
export default {
    components: {
        BIconQuestionCircle
    },
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
}

.difficulty-button{
    background-color: transparent;
    color: #212529;
    outline: none;
    border-radius: 10px;
    padding: 10px;
    border: 2px solid #212529;
    width: 100%;
}

.fill-bg {
    background: #212529;
    color: white;
}

.saufi-heading {
    font-weight: bold;
}

.tooltip-trigger {
    color: #212529;
    height: fit-content;
    padding: 2px 5px;
    margin-left: 10px;
}
.tooltip-trigger:focus {
    box-shadow: none;
}
.tooltip-trigger:hover {
   color: #677a7d;
}

.heading-container {
    display: flex;
}
</style>
