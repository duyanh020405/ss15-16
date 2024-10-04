<template>
    <div>
        <router-view></router-view>
        <button><a href="/contact">Sang contatct</a></button>
        <nav>
            <router-link to="/contact">siu</router-link>
        </nav>
        <div>
            <Btvn></Btvn>


        </div>
    </div>

</template>
<script setup>
import { RouterLink } from 'vue-router';
import Btvn from './components/Btvn.vue'
</script>
<style></style>