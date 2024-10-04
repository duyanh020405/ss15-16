<template>
    <h1>Name :{{ id }}</h1>
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
const { id } = route.params
</script>