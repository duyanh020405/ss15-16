<template>
  <div>
    <Profile></Profile>
    <h1>Bai 6</h1>
    <B6></B6>
    <h1>Bai 7</h1>
    <B7></B7>
    <h1>Bai 8</h1>
    <B8></B8>
    <h1>Bai 9</h1>
    <B9></B9>
    <RouterView />
  </div>

</template>
<script setup>
import Profile from './views/Profile.vue';
import B6 from './components/B6.vue';
import B7 from './components/B7.vue';
import B8 from './components/B8.vue';
import B9 from './components/B9.vue';
</script>
<style></style>