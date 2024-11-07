<template>
  <section class="section">
    <div class="section__container container">
      <div class="section__wrap">
        <ul class="section__projects">
          <li v-for="project in projects" :key="project.id"></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  projects: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss">
@use 'assets/styles/base/functions' as *;
@use 'assets/styles/base/mixins' as *;
</style>
