<template>
  <div class="text-center mt-6">
    <h1
      class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
    >
      {{ msg }}
    </h1>
    <button
      type="button"
      class="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
      @click="count++"
    >
      Count is: {{ count }}
    </button>
    <p class="mt-4 text-lg leading-7 text-gray-500">
      Edit
      <code class="italic text-gray-600">components/HelloWorld.vue</code> to
      test hot module replacement.
    </p>
  </div>
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
  data() {
    return {
      count: 0,
    };
  },
};
</script>
