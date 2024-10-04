<template>
    <div class="p-4">
        <h1>Day la trang thong tin chi tiet</h1>
        <p class="font-bold text-lg">Name: {{ item.name }}</p>
        <p class="text-gray-700">Email: {{ item.email }}</p>
        <p class="text-gray-700">Address: {{ item.address }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const id = route.params.id;
const users = [
    { id: 1, name: 'Nguyen Van A', email: 'nva@gmail.com', address: 'Ha Noi' },
    { id: 2, name: 'Nguyen Van B', email: 'nvb@gmail.com', address: 'Ha Noi' },
    { id: 3, name: 'Nguyen Van C', email: 'nvc@gmail.com', address: 'Ha Noi' }
];

const item = users.find(user => user.id === Number(id));
</script>

<style scoped></style>
