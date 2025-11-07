<template>
  <main>
    <!-- Section: Hero -->
    <HeroSection />

    <!-- Section: Statistics -->
    <StatsSection />

    <!-- Section: Projects -->
    <ProjectsSection v-if="sortedProjects && sortedProjects.length" :title="'Projects'" :projects="sortedProjects" />

    <!-- Section: About Me -->
    <AboutSection />

    <!-- Section: TailwindCSS Projects -->
    <CardsSection v-if="tailwindProjects && tailwindProjects.length" :title="'TailwindCSS'" :projects="tailwindProjects" />

    <!-- Section: Techs -->
    <TickerSection v-if="usedTechs && usedTechs.length" :words="usedTechs" />

    <!-- Section: Online Stores Projects -->
    <CardsSection v-if="onlineStoresProjects && onlineStoresProjects.length" :title="'Online Stores'" :projects="onlineStoresProjects" />

    <!-- Section: Soft Skills -->
    <TickerSection v-if="softSkills && softSkills.length" :words="softSkills" />

    <!-- Section: Landings Projects -->
    <CardsSection v-if="landingsProjects && landingsProjects.length" :title="'Landings'" :projects="landingsProjects" />

    <!-- Section: Work Values -->
    <TickerSection v-if="workValues && workValues.length" :words="workValues" />

    <!-- Section: Betting Projects -->
    <!-- <CardsSection v-if="bettingProjects && bettingProjects.length" :title="'Betting'" :projects="bettingProjects" /> -->

    <!-- Section: CTA -->
    <CtaSection />
  </main>
</template>

<script setup>
import { fetchSquidexData } from '~/services/squidex.js';

import HeroSection from '~/components/sections/home/Hero.vue';
import ProjectsSection from '~/components/sections/home/Projects.vue';
import StatsSection from '~/components/sections/home/Stats.vue';
import CardsSection from '~/components/sections/home/Cards.vue';
import AboutSection from '~/components/sections/home/About.vue';
import CtaSection from '~/components/sections/home/Cta.vue';
import TickerSection from '~/components/sections/home/Ticker.vue';

definePageMeta({
  layout: 'default',
});

const { data: projects } = await useAsyncData('projects', () => fetchSquidexData('projects'));

const sortedProjects = computed(() => {
  return (
    projects.value?.sort((a, b) => {
      const aPriority = typeof a.data.priority === 'number' ? a.data.priority : Infinity;
      const bPriority = typeof b.data.priority === 'number' ? b.data.priority : Infinity;

      return aPriority - bPriority;
    }) || []
  );
});

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

// Used Techs
const usedTechs = [
  'HTML5',
  'CSS3',
  'SCSS',
  'SASS',
  'BEM',
  'Bootstap',
  'TailwindCSS',
  'JS',
  'Vue 2/3',
  'Nuxt 2/3',
  'Swiper',
  'Lenis.js',
  'AOS',
  'Simple Parallax',
  'GSAP',
  'Masonry',
  'CursorDot',
  'FancyBox',
  'Chart.js',
  'Apexcharts',
  'SVG Animations',
  'Choices.js',
];

// Soft Skills
const softSkills = [
  'Adaptability',
  'Problem-solving',
  'Teamwork',
  'Leadership',
  'Critical thinking',
  'Emotional intelligence',
  'Conflict resolution',
  'Time management',
  'Interpersonal skills',
  'Work ethic',
  'Attention to detail',
  'Collaboration',
  'Empathy',
  'Decision-making',
  'Stress management',
  'Self-motivation',
  'Public speaking',
  'Networking',
  'Open-mindedness',
  'Accountability',
];

// Work Values
const workValues = [
  'Integrity',
  'Innovation',
  'Excellence',
  'Collaboration',
  'Accountability',
  'Customer Focus',
  'Transparency',
  'Sustainability',
  'Inclusivity',
  'Continuous Learning',
  'Work-Life Balance',
  'Diversity',
  'Fairness',
  'Team Success',
  'Leadership by Example',
  'Commitment',
  'Growth Mindset',
];
</script>
