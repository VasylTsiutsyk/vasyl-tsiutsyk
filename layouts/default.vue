<template>
  <div class="wrapper">
    <!-- <AppPreloader /> -->

    <slot />

    <AppFooter />
  </div>
</template>

<script setup>
// import AppPreloader from '~/components/general/Preloader.vue';
import AppFooter from '~/components/partials/Footer.vue';
</script>
