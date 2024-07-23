<template>
  <div class="bg-gray-100">
    <nav class="bg-gray-900 p-4">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0">
              <router-link to="/contact/dashboard">
                <h1 class="text-white text-lg font-semibold">Dashboard</h1>
              </router-link>
            </div>
          </div>
          <div class="flex items-center">
            <button @click="logout" class="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div class="flex justify-center items-center min-h-screen">
      <div class="w-full max-w-md px-4 py-8 bg-white shadow-md rounded-md">
        <h2 class="text-2xl font-semibold mb-4">Update Contact</h2>
        <form @submit.prevent="submitForm" class="max-w-md mx-auto p-4 bg-white shadow-md rounded">
          <div class="mb-4">
            <label for="firstname" class="block text-sm font-medium text-gray-700">First Name:</label>
            <input type="text" v-model="contact.firstname" class="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-gray-500 w-full" required />
          </div>
          <div class="mb-4">
            <label for="lastname" class="block text-sm font-medium text-gray-700">Last Name:</label>
            <input type="text" v-model="contact.lastname" class="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-gray-500 w-full" required />
          </div>
          <div class="mb-4">
            <label for="about" class="block text-sm font-medium text-gray-700">About Contact:</label>
            <input type="text" v-model="contact.about" class="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-gray-500 w-full" required />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
            <input type="email" v-model="contact.email" class="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-gray-500 w-full" required />
          </div>
          <div class="mb-4">
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone:</label>
            <input type="text" v-model="contact.phone" class="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-gray-500 w-full" required />
          </div>
          <button type="submit" class="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 mb-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Update</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axiosInstance from '../../auth/axiosInstance';
import AuthService from '../../auth/AuthService';

export default {
  name: 'UpdateContact',
  data() {
    return {
      contact: {
        firstname: '',
        lastname: '',
        about: '',
        email: '',
        phone: '', // Added phone field
      },
    };
  },
  created() {
    this.fetchContact();
  },
  methods: {
    logout() {
        AuthService.logout();
        this.$router.push('/login');
      },
    fetchContact() {
      const contactId = this.$route.params.id;
      axiosInstance.get(`/contacts/${contactId}`)
        .then(response => {
          this.contact = response.data;
        })
        .catch(error => {
          console.error('Error fetching contact:', error);
        });
    },
    submitForm() {
      const contactId = this.$route.params.id;
      axiosInstance.put(`/contacts/${contactId}`, this.contact)
        .then(() => {
          this.$router.push({ name: 'Dashboard' });
        })
        .catch(error => {
          console.error('Error updating contact:', error);
        });
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
