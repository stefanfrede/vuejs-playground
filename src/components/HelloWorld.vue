<template>
  <section
    class="grid auto-rows-auto gap-8 py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32"
  >
    <figure class="flex justify-center">
      <img alt="Vue logo" class="h-32 w-auto" src="../assets/logo.svg" />
    </figure>
    <h1 class="max-w-3xl mx-auto text-2xl leading-9 font-medium text-gray-900">
      {{ msg }}
    </h1>
    <div class="text-center">
      <button
        type="button"
        class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition ease-in-out duration-150"
        @click="increaseCount()"
      >
        Count is: {{ count }}
      </button>
    </div>
    <p class="text-lg leading-7 text-center text-gray-500">
      Edit
      <code class="italic text-gray-600">components/HelloWorld.vue</code> to
      test hot module replacement.
    </p>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  setup() {
    const count = ref(0);

    function increaseCount() {
      count.value = count.value + 1;
    }

    return { count, increaseCount };
  },
};
</script>
