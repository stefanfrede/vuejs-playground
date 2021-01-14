<template>
  <header>
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight text-gray-900">
        {{ msg }}
      </h1>
    </div>
  </header>
  <main>
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-8 text-gray-600 leading-8">
        <p class="text-xl">
          For a guide and recipes on how to configure / customize this project,
          check out the
          <a
            href="https://vitejs.dev/"
            class="text-green-600 hover:text-green-700 font-medium underline"
            >Vite documentation</a
          >
        </p>
        <h2 class="mt-12 mb-8 text-2xl text-gray-900 font-bold leading-tight">
          Installed Plugins
        </h2>
        <ul class="mb-6 space-x-4 flex">
          <li>
            <a
              href="https://github.com/vuejs/vue-next/tree/master/packages/compiler-sfc#readme"
              class="text-green-600 hover:text-green-700 font-medium underline"
              >@vue/compiler-sfc</a
            >
          </li>
          <li>
            <a
              href="https://github.com/vitejs/vite/tree/main/packages/plugin-vue#readme"
              class="text-green-600 hover:text-green-700 font-medium underline"
              >@vitejs/plugin-vue</a
            >
          </li>
        </ul>
        <h2 class="mt-12 mb-8 text-2xl text-gray-900 font-bold leading-tight">
          Essential Links
        </h2>
        <ul class="mb-6 space-x-4 flex">
          <li>
            <a
              href="https://v3.vuejs.org/"
              class="text-green-600 hover:text-green-700 font-medium underline"
              >Core Docs</a
            >
          </li>
          <li>
            <a
              href="https://forum.vuejs.org"
              class="text-green-600 hover:text-green-700 font-medium underline"
              >Forum</a
            >
          </li>
          <li>
            <a
              href="https://chat.vuejs.org"
              class="text-green-600 hover:text-green-700 font-medium underline"
              >Community Chat</a
            >
          </li>
          <li>
            <a
              href="https://twitter.com/vuejs"
              class="text-green-600 hover:text-green-700 font-medium underline"
              >Twitter</a
            >
          </li>
          <li>
            <a
              href="https://news.vuejs.org"
              class="text-green-600 hover:text-green-700 font-medium underline"
              >News</a
            >
          </li>
        </ul>
        <h2 class="mt-12 mb-8 text-2xl text-gray-900 font-bold leading-tight">
          Ecosystem
        </h2>
        <ul class="space-x-4 flex">
          <li>
            <a
              href="https://router.vuejs.org"
              class="text-green-600 hover:text-green-700 font-medium underline"
              >vue-router</a
            >
          </li>
          <li>
            <a
              href="https://vuex.vuejs.org"
              class="text-green-600 hover:text-green-700 font-medium underline"
              >vuex</a
            >
          </li>
          <li>
            <a
              href="https://github.com/vuejs/vue-devtools#vue-devtools"
              class="text-green-600 hover:text-green-700 font-medium underline"
              >vue-devtools</a
            >
          </li>
          <li>
            <a
              href="https://github.com/vuejs/awesome-vue"
              class="text-green-600 hover:text-green-700 font-medium underline"
              >awesome-vue</a
            >
          </li>
          <li>
            <a
              href="https://github.com/vitejs/awesome-vite"
              class="text-green-600 hover:text-green-700 font-medium underline"
              >awesome-vite</a
            >
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
};
</script>
