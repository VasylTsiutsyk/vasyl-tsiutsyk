<template>
  <main>
    <!-- Section 01: Hero -->
    <HeroSection />

    <!-- Section Projects -->
    <ProjectsSection v-if="projects && projects.length" :projects="projects" />
  </main>
</template>

<script setup>
import HeroSection from '~/components/sections/home/Hero.vue';
import ProjectsSection from '~/components/sections/home/Projects.vue';
import { fetchSquidexData } from '~/services/squidex.js';

const { data: projects } = await useAsyncData('projects', () => fetchSquidexData('projects'));
</script>
