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
      </div>
      <div class="text-lg text-gray-500 leading-relaxed">
        <h2 class="mb-8 text-3xl font-bold text-gray-900 leading-tight">
          Installed Plugins
        </h2>
        <p class="mb-6">
          <a
            href="https://github.com/vuejs/vue-next/tree/master/packages/compiler-sfc#readme"
            class="text-green-600 hover:text-green-700 font-medium underline"
            >@vue/compiler-sfc</a
          >
          -
          <a
            href="https://github.com/vitejs/vite/tree/main/packages/plugin-vue#readme"
            class="text-green-600 hover:text-green-700 font-medium underline"
            >@vitejs/plugin-vue</a
          >
        </p>
        <h2 class="mt-14 mb-8 text-3xl font-bold text-gray-900 leading-tight">
          Essential Links
        </h2>
        <p class="mb-6">
          <a
            href="https://v3.vuejs.org/"
            class="text-green-600 hover:text-green-700 font-medium underline"
            >Core Docs</a
          >
          -
          <a
            href="https://forum.vuejs.org"
            class="text-green-600 hover:text-green-700 font-medium underline"
            >Forum</a
          >
          -
          <a
            href="https://chat.vuejs.org"
            class="text-green-600 hover:text-green-700 font-medium underline"
            >Community Chat</a
          >
          -
          <a
            href="https://twitter.com/vuejs"
            class="text-green-600 hover:text-green-700 font-medium underline"
            >Twitter</a
          >
          -
          <a
            href="https://news.vuejs.org"
            class="text-green-600 hover:text-green-700 font-medium underline"
            >News</a
          >
        </p>
        <h2 class="mt-14 mb-8 text-3xl font-bold text-gray-900 leading-tight">
          Ecosystem
        </h2>
        <p class="mb-6">
          <a
            href="https://router.vuejs.org"
            class="text-green-600 hover:text-green-700 font-medium underline"
            >vue-router</a
          >
          -
          <a
            href="https://vuex.vuejs.org"
            class="text-green-600 hover:text-green-700 font-medium underline"
            >vuex</a
          >
          -
          <a
            href="https://github.com/vuejs/vue-devtools#vue-devtools"
            class="text-green-600 hover:text-green-700 font-medium underline"
            >vue-devtools</a
          >
          -
          <a
            href="https://github.com/vuejs/awesome-vue"
            class="text-green-600 hover:text-green-700 font-medium underline"
            >awesome-vue</a
          >
          -
          <a
            href="https://github.com/vitejs/awesome-vite"
            class="text-green-600 hover:text-green-700 font-medium underline"
            >awesome-vite</a
          >
        </p>
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
