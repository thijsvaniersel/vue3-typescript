<template>
    {{ counterPretty }}
    <a @click="changeCounter(1)">+</a>
    <a @click="changeCounter(-1)">-</a>  
</template>

<script setup lang="ts">
// composable
import { useCounter } from '~~/composables/counter'
let { counter, counterPretty, changeCounter } = useCounter();
</script>

<style>
    a {
        padding: .5em 1em;
        margin: 0 .3em;
        background-color: red;
        color: white;
        cursor: pointer;
    }

</style>