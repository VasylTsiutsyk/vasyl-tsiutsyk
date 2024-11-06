<template>
  <section class="section-cards">
    <div class="section-cards__container container">
      <div class="section-cards__wrap">
        <ul class="section-cards__grid">
          <li v-for="project in projects" :key="project.id" class="section-cards__grid-item">
            <ProjectCard :project="project" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from '~/components/general/ProjectCard.vue';

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
});
</script>
