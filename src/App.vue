<template>
  <nav class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <figure class="flex flex-shrink-0 items-center space-x-1">
        <img alt="Vue.js logo" class="h-8 w-auto" src="./assets/logo.svg" />
        <figcaption>Starter-Kit</figcaption>
      </figure>
      <div class="space-x-4">
        <router-link :to="{ name: 'Home' }" class="router-link"
          >Home</router-link
        >
        <router-link :to="{ name: 'About' }" class="router-link"
          >About</router-link
        >
      </div>
    </div>
  </nav>
  <div class="py-10">
    <router-view />
  </div>
</template>
