<template>
  <section class="section">
    <div class="section__container container">
      <div class="section__wrap">
        <ul class="section__projects">
          <li v-for="project in projects" :key="project.id">
            {{ project.data.title }}
          </li>
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
