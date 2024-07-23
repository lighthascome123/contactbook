<template>
    <div class="bg-gray-50">
 
  
      <!-- Success Card -->
      <div class="max-w-xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-md text-center">
        <h2 class="text-2xl font-semibold mb-4">Congratulations!!!</h2>
        <p>You have successfully completed your payment.</p>
        <button class="underline" @click="closePage">Close Page</button>
        <div class="mt-6">
          <Vue3Lottie 
            :autoplay="true"
            :loop="true" 
            :animationData="successAnimation"
            class="w-full h-64"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Vue3Lottie } from 'vue3-lottie';
  import successAnimation from '../assets/success.json';
  
  export default {
    components: {
      Vue3Lottie
    },
    data() {
      return {
        isMobileMenuOpen: false,
        successAnimation
      };
    },
    methods: {
      toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
      },
    closePage() {
      window.close(); // Close the current window or tab
    }
    }
  };
  </script>
  
  <style scoped>
  .fullscreen-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    z-index: 9999;    
  }
  
  .fullscreen-lottie {
    width: 100%;
    height: 100%;
  }
  </style>
  