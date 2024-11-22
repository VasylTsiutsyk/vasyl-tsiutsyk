<template>
  <main>
    <!-- Section 01: Hero -->
    <HeroSection />

    <!-- Section 02: Statistics -->
    <StatsSection />

    <!-- Section 03: Projects -->
    <CardsSection v-if="projects && projects.length" :title="'Projects'" :projects="projects" />

    <!-- Section 04: TailwindCSS Projects -->
    <CardsSection
      v-if="tailwindProjects && tailwindProjects.length"
      :title="'TailwindCSS'"
      :projects="tailwindProjects"
    />

    <!-- Section 05: Online Stores Projects -->
    <CardsSection
      v-if="onlineStoresProjects && onlineStoresProjects.length"
      :title="'Online Stores'"
      :projects="onlineStoresProjects"
    />

    <!-- Section 06: Landings Projects -->
    <CardsSection v-if="landingsProjects && landingsProjects.length" :title="'Landings'" :projects="landingsProjects" />

    <!-- Section 07: Betting Projects -->
    <CardsSection v-if="bettingProjects && bettingProjects.length" :title="'Betting'" :projects="bettingProjects" />

    <!-- Section CTA -->
    <CtaSection />
  </main>
</template>

<script setup>
import HeroSection from '~/components/sections/home/Hero.vue';
import StatsSection from '~/components/sections/home/Stats.vue';
import CardsSection from '~/components/sections/home/Cards.vue';
// import GallerySection from '~/components/sections/home/Gallery.vue';
// import HallSection from '~/components/sections/home/Hall.vue';
// import CreateSection from '~/components/sections/home/Create.vue';
import CtaSection from '~/components/sections/home/Cta.vue';

import { fetchSquidexData } from '~/services/squidex.js';

const { data: projects } = await useAsyncData('projects', () => fetchSquidexData('projects'));

const tailwindProjects = computed(() => {
  return projects.value.filter((p) => p.data.type.includes('tailwindcss')) || [];
});

const onlineStoresProjects = computed(() => {
  return projects.value.filter((p) => p.data.type.includes('store')) || [];
});

const landingsProjects = computed(() => {
  return projects.value.filter((p) => p.data.type.includes('landing')) || [];
});

const bettingProjects = computed(() => {
  return projects.value.filter((p) => p.data.type.includes('betting')) || [];
});
</script>
