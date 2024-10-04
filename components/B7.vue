<template>
    <div>
        <button :class="{ active: $route.path === '/home' }"><router-link to="/home">Home</router-link></button>
        <button :class="{ active: $route.path === '/contac' }"><router-link to="/contac">Contact</router-link></button>
        <button :class="{ active: $route.path === '/product' }"><router-link
                to="/product">Product</router-link></button>
    </div>
</template>

<style>
.active {
    background-color: blue;
    color: white;
}
</style>
