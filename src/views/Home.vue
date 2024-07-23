<template>
	<div class="space-y-8 md:space-y-8 bg-gray-100 text-gray-800">

		<section class="bg-gray-200 text-gray-800">
			<div class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
				<div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
					<h1 class="text-5xl font-bold leading-none sm:text-6xl">Contact 
						<span class="text-black">Book </span>Management
					</h1>
					<p class="mt-6 mb-8 text-lg  sm:mb-12">This App is your one-stop solution for managing all your contacts in a convenient and organized way.  Store phone numbers, emails, addresses, and even notes for each contact, all accessible at your fingertips.
						
					</p>
					<div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
						<router-link to="/login" rel="noopener noreferrer" class="px-8 py-3 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-700 text-white">Get Started</router-link>
						<!-- <a rel="noopener noreferrer" href="#" class="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Malesuada</a> -->
					</div>
				</div>
				<div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
					<img src="../assets/address.webp" alt="" class="object-contain   h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
				</div>
			</div>
		</section>		 
 
		 
 
		<footer class="py-6 bg-gray-100 text-gray-900">
			<div class="container px-6 mx-auto space-y-6 divide-y divide-gray-600 md:space-y-12 divide-opacity-50">		 
				<div class="grid justify-center pt-6 lg:justify-between">
					<div class="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
						<span>&copy;2024 All rights reserved</span>					
					</div>					 
				</div>
			</div>
		</footer>
	</div>
</template>