<template>
    <div class="min-h-screen bg-gray-100">
    <!-- Navigation Bar -->
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
      <main class="py-8">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="bg-white shadow-md rounded-lg p-6">
            <div>
                <div class="flex justify-content-between font-semibold items-center mb-4">
                    <h2>All Contacts</h2>
                    <button @click="createNewAd" class="bg-gray-900 hover:bg-gray-700 text-white font-semibold ml-2 py-2 px-4 rounded">New Contact</button>
                </div>
                <div class="overflow-auto rounded-lg shadow-md">
                  <table class="table w-full text-sm min-w-full border border-gray-200">
                    <thead>
                      <tr class="text-left text-sm bg-gray-900 text-white">
                        <th class="p-2">First Name</th>
                        <th class="p-2">Last Name</th>
                        <th class="p-2">About</th>
                        <th class="p-2">Phone</th>
                        <th class="p-2">Email</th>
                        <th class="p-2">Created</th>
                        <th class="p-2 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="ad in advertisements" :key="ad._id" class="hover:bg-gray-100">
                        <td class="p-2">{{ ad.firstname }}</td>
                        <td class="p-2">{{ ad.lastname }}</td>
                        <td class="p-2">{{ ad.about }}</td>                        
                        <td class="p-2">{{ ad.phone }}</td>
                        <td class="p-2">{{ ad.email }}</td>
                        <td class="p-2">{{ new Date(ad.date).toLocaleDateString() }}</td>
                        <td class="p-2 flex justify-end">
                          <button @click="editAd(ad._id)" class="p-2 text-gray text-sm underline font-semibold">Edit</button>                          
                          <button @click="deleteAd(ad._id)" class="  text-red-500 text-sm font-semibold underline ml-2">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
              
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>  
  import axiosInstance from '../../auth/axiosInstance';
  import AuthService from '../../auth/AuthService';
  
  export default {
    name: 'Dashboard',
    data() {
      return {
        advertisements: [],
        isMobileMenuOpen: false,
      };
    },
    created() {
      this.fetchAdvertisements();
    },
    methods: {
      logout() {
        AuthService.logout();
        this.$router.push('/login');
      },
      fetchAdvertisements() {
        axiosInstance.get('/contacts')
            .then(response => {
            this.advertisements = response.data;
            })
            .catch(error => {
            console.error('Error fetching contacts:', error);
            });
        },
        createNewAd() {
        this.$router.push({ name: 'CreateAdvertisement' });
        },
        editAd(id) {
            this.$router.push({ name: 'EditAdvertisement', params: { id } });
        },
        deleteAd(id) {
        axiosInstance.delete(`/contacts/${id}`)
            .then(() => {
            this.fetchAdvertisements();
            })
            .catch(error => {
            console.error('Error deleting contact:', error);
         });
        },
        toggleMobileMenu() {
           this.isMobileMenuOpen = !this.isMobileMenuOpen;
        }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  