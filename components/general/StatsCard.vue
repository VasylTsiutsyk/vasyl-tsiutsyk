<template>
  <article class="stats-card">
    <div class="stats-card__label">{{ label }}</div>

    <div class="stats-card__value" :aria-label="`Over ${value} ${label}`">{{ displayedValue }}+</div>
  </article>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  value: {
    type: [String, Number],
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});

const displayedValue = ref(0);

onMounted(() => {
  const numericValue = parseInt(props.value, 10);

  ScrollTrigger.create({
    trigger: '.stats-card',
    start: 'top 70%',
    onEnter: () => {
      gsap.to(displayedValue, {
        duration: 2,
        value: numericValue,
        roundProps: 'value',
        onUpdate: () => {
          displayedValue.value = Math.floor(displayedValue.value);
        },
      });
    },
  });
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<style lang="scss">
@use 'assets/styles/base/functions' as *;
@use 'assets/styles/base/mixins' as *;

.stats-card {
  display: flex;
  flex-direction: column-reverse;
  gap: rem(16);
  padding: rem(12);
  text-align: center;

  &__value {
    font-family: var(--font-family-display);
    font-size: fluid(96, 64);
    font-weight: 400;
    line-height: 1;
  }

  &__label {
    font-size: fluid(16, 14);
    font-weight: var(--body-font-weight);
    line-height: var(--body-line-height);
  }
}
</style>
