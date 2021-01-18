<template>
  <nav class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <figure class="flex flex-shrink-0 items-center space-x-1">
        <img alt="Vue.js logo" class="h-8 w-auto" src="./assets/logo.svg" />
        <figcaption>Starter-Kit</figcaption>
      </figure>
      <ul class="flex space-x-4">
        <li>
          <router-link :to="{ name: 'Home' }" class="router-link"
            >Home</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'About' }" class="router-link"
            >About</router-link
          >
        </li>
        <li>
          <a
            href="https://github.com/stefanfrede/vuejs-starter-kit/"
            class="text-base font-bold underline hover:text-green-700"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="py-10">
    <router-view />
  </div>
</template>
