<template>
    <div class="min-h-screen bg-gray-100">
        <!-- Navigation Bar -->
        <nav class="bg-gray-900 p-4">
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">          
              <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-shrink-0">
                  <router-link to="/advertiser/dashboard"><h1 class="text-white text-lg font-semibold">Dashboard</h1></router-link> 
                </div>
                
              </div>
            </div>
          </div> 
        </nav>
        <div class="flex justify-center items-center min-h-screen">
          <div class="w-full max-w-md px-8 py-6 bg-white shadow-md rounded-lg overflow-hidden">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ ad.title }}</h2>
            <p class="text-gray-600 mb-4">{{ ad.description }}</p>
            <div class="flex items-center">
              <p class="text-gray-600 mb-4">Ad clicks: {{ ad.clicks }}</p>
              <!-- <p class="text-gray-600 mb-4 ml-2">Views: {{ ad.views }}</p> -->
            </div>
            <div v-if="ad.mediaUrl" class="mb-4">
              <img :src="ad.mediaUrl" class="object-cover rounded-lg h-64 w-full" />
            </div>
            <div class="flex justify-between items-center">
              <p class="text-sm font-medium text-gray-700"><strong>Start Date:</strong> {{ new Date(ad.startDate).toLocaleDateString() }}</p>
              <p class="text-sm font-medium text-gray-700"><strong>End Date:</strong> {{ new Date(ad.endDate).toLocaleDateString() }}</p>
            </div>
          </div>
        </div>
        
    </div>
  </template>
  
  <script>
 import axiosInstance from '../../auth/axiosInstance';
  
  export default {
    data() {
      return {
        ad: {},
        isMobileMenuOpen: false,
      };
    },
    created() {
      this.fetchAd();
    },
    methods: {
      async fetchAd() {
        axiosInstance.get(`advertisers/${this.$route.params.id}`)
            .then(response => {
            this.ad  = response.data;
            })
            .catch(error => {
            console.error('Error fetching ad :', error);
            });        
      },
      toggleMobileMenu() {
           this.isMobileMenuOpen = !this.isMobileMenuOpen;
        }
    },
  };
  </script>
  