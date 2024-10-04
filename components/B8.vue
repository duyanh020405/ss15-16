<template>
    <nav>
        <button :class="{ active: $route.path === '/dashboard' }">
            <router-link to="/dashboard">Dashboard</router-link>
        </button>
        <button :class="{ active: $route.path === '/account' }">
            <router-link to="/account">Account</router-link>
        </button>
        <button :class="{ active: $route.path === '/product' }">
            <router-link to="/product">Product</router-link>
        </button>
    </nav>
</template>

<style>
.active {
    background-color: blue;
    color: #fff;
    font-weight: 700;
}
</style>
