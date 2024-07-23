<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
        <form @submit.prevent="register">
          <div class="mb-4">
            <label class="block text-gray-700">Name</label>
            <input
              type="name"
              v-model="name"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Email</label>
            <input
              type="email"
              v-model="email"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700">Password</label>
            <input
              type="password"
              v-model="password"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition duration-200"
          >
            Register
          </button>
        </form>
        <h1 v-if="loading" class="loader mt-2"></h1>
        <div v-if="errorMessage" class="mt-4 text-red-500">{{ errorMessage }}</div>
        <router-link to="/login">Click to login</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import AuthService from '../auth/AuthService';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        errorMessage: '',
        loading: false,
      };
    },
    methods: {
      async register() {
        this.loading = true;
        try {
          await AuthService.register({name: this.name, email: this.email, password: this.password });
          this.$router.push('/contact/dashboard');
        } catch (error) {
          this.errorMessage = 'Invalid email or password';
        }finally{
          this.loading = false;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .loader {
    border: 2px solid #f3f3f3;
    border-top: 2px solid #3498db;
    border-radius: 50%;
    width: 19px;
    height: 19px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
 