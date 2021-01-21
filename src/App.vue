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
            class="text-base font-bold underline hover:text-green-900"
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

<script>
import { computed, reactive } from 'vue';
import { useHead } from '@vueuse/head';

import { siteData } from '@/store';

export default {
  name: 'App',
  setup() {
    const data = reactive(siteData);

    useHead({
      link: [
        {
          rel: 'canonical',
          href: computed(() => data.url),
        },
      ],
      meta: [
        {
          property: 'og:site_name',
          content: computed(() => data.title),
        },
        {
          property: 'og:title',
          content: computed(() => data.title),
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: computed(() => data.url),
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          property: 'og:image',
          content: computed(() => `${data.url}social-share.png`),
        },
        {
          name: 'twitter:image',
          content: computed(() => `${data.url}social-share.png`),
        },
        {
          property: 'og:image:alt',
          content: computed(() => `Page image for ${data.title}`),
        },
        {
          name: 'twitter:image:alt',
          content: computed(() => `Page image for ${data.title}`),
        },
        {
          name: 'description',
          content: computed(() => data.description),
        },
        {
          name: 'twitter:description',
          content: computed(() => data.description),
        },
        {
          property: 'og:description',
          content: computed(() => data.description),
        },
      ],
      title: computed(() => data.title),
    });
  },
};
</script>
