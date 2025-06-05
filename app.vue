<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const layout = 'default';

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/vasyl-tsiutsyk/favicon.ico',
    },
  ],
});
</script>
