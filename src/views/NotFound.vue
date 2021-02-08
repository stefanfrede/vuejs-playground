<template>
  <div class="about">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight text-gray-900">Not Found</h1>
    </div>
    <main>
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="py-8 text-gray-600 leading-8">
          <p class="text-xl mb-6">
            The {{ resource }} you were looking for was not found.
          </p>
          <p class="text-xl">
            <router-link
              :to="{ name: 'Home' }"
              class="text-green-700 hover:text-green-900 font-medium underline"
              >Back to the home page</router-link
            >
          </p>
          <img src="/src/assets/404.svg" class="mt-12" alt="404" />
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page',
    },
  },
};
</script>
