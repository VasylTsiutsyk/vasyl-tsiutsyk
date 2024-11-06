<template>
  <div class="wrapper">
    <slot />

    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from '~/components/partials/Footer.vue';
</script>
