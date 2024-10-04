<template>
    <section class="vh-100" style="background-color: #eee;">
        <h1>Bt 3 :</h1>
        <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-12 col-xl-11">
                    <div class="card text-black" style="border-radius: 25px;">
                        <div class="card-body p-md-5">
                            <div class="row justify-content-center">
                                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                    <form @submit.prevent="handleSubmit" class="mx-1 mx-md-4">
                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="text" v-model="formData.name" class="form-control"
                                                    required />
                                                <label class="form-label">Your Name</label>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="email" v-model="formData.email" class="form-control"
                                                    required />
                                                <label class="form-label">Your Email</label>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="password" v-model="formData.password" class="form-control"
                                                    required />
                                                <label class="form-label">Password</label>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="password" v-model="formData.confirmPassword"
                                                    class="form-control" required />
                                                <label class="form-label">Repeat your password</label>
                                            </div>
                                        </div>
                                        <div class="form-check d-flex justify-content-center mb-5">
                                            <input type="checkbox" v-model="formData.terms"
                                                class="form-check-input me-2" required />
                                            <label class="form-check-label">
                                                I agree to all statements in <a href="#!">Terms of service</a>
                                            </label>
                                        </div>
                                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button type="submit" class="btn btn-primary btn-lg">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                terms: false,
            },
        };
    },
    methods: {
        handleSubmit() {
            // Handle form submission logic
            if (this.formData.password !== this.formData.confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            // Add your form submission logic here (e.g., API call)
            console.log(this.formData);
        },
    },
};
</script>

<style scoped></style>
