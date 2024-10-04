<template>
    <div class="p-4">
        <div v-for="(item, index) in a" :key="item.id" class="bg-white shadow-md rounded-lg p-4 mb-4">
            <p class="font-bold text-lg">Name: {{ item.name }}</p>
            <p class="text-gray-700">Email: {{ item.email }}</p>
            <p class="text-gray-700">Address: {{ item.address }}</p>
            <button @click="navigateToDetail(item)"
                class="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                <span>Action</span>
            </button>
            <p>_________________</p>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const a = [
    {
        id: 1,
        name: 'Nguyen Van A',
        email: 'nva@gmail.com',
        address: 'Ha Noi'
    },
    {
        id: 2,
        name: 'Nguyen Van B',
        email: 'nvb@gmail.com',
        address: 'Ha Noi'
    },
    {
        id: 3,
        name: 'Nguyen Van C',
        email: 'nvc@gmail.com',
        address: 'Ha Noi'
    }
];

const navigateToDetail = (item) => {
    router.push(`/B9b/${item.id}`);

};
</script>

<style scoped></style>
