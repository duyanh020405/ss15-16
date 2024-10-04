<template>
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
            <form @submit.prevent="handleLogin">
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700" for="email">Email</label>
                    <input type="email" id="email" v-model="email" required
                        class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500" />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700" for="password">Password</label>
                    <input type="password" id="password" v-model="password" required
                        class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500" />
                </div>
                <button type="submit"
                    class="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200">
                    Login
                </button>
            </form>
            <div class="mt-4 text-center">
                <a href="#" class="text-blue-500 hover:underline">Forgot Password?</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        handleLogin() {
            // Handle the login logic here
            console.log('Email:', this.email);
            console.log('Password:', this.password);
            // Reset fields after submission if necessary
            this.email = '';
            this.password = '';
        }
    }
};
</script>

<style scoped></style>
