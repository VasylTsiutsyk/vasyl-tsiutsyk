<template>
  <main>
    <!-- Section 01: Hero -->
    <HeroSection />

    <!-- Section 02: Statistics -->
    <StatsSection />

    <!-- Section 03: Projects -->
    <CardsSection v-if="projects && projects.length" :projects="projects" />

    <!-- <GallerySection /> -->

    <!-- <HallSection /> -->

    <!-- <CreateSection /> -->

    <!-- <CtaSection /> -->
  </main>
</template>

<script setup>
import HeroSection from '~/components/sections/home/Hero.vue';
import StatsSection from '~/components/sections/home/Stats.vue';
import CardsSection from '~/components/sections/home/Cards.vue';
// import GallerySection from '~/components/sections/home/Gallery.vue';
// import HallSection from '~/components/sections/home/Hall.vue';
// import CreateSection from '~/components/sections/home/Create.vue';
// import CtaSection from '~/components/sections/home/Cta.vue';

import { fetchSquidexData } from '~/services/squidex.js';

const { data: projects } = await useAsyncData('projects', () => fetchSquidexData('projects'));
</script>
