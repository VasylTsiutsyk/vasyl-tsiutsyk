<template>
  <transition name="preloader-fade">
    <div v-if="isVisible" class="preloader">
      <h2 class="preloader__text">{{ currentText }}</h2>
    </div>
  </transition>
</template>

<script setup>
const isVisible = ref(true);

const messages = [
  'Frontend Developer',
  '4+ years',
  'HTML5/CSS/SCSS/SASS',
  'Tailwind & Bootstrap',
  'JS/ES6+',
  'Vue 2/3, Nuxt 2/3',
  'CSS/JS Animations',
  'Lenis & GSAP Effects',
  'Swiper & Fancybox',
  'Creativity & Precision',
  'Problem Solver',
];

const currentText = ref(messages[0]);
let interval;

function startTextCycle() {
  let index = 0;

  interval = setInterval(() => {
    index = (index + 1) % messages.length;
    currentText.value = messages[index];
  }, 200);
}

function hidePreloader() {
  setTimeout(() => {
    isVisible.value = false;
    clearInterval(interval);
  }, 3000);
}

onMounted(() => {
  startTextCycle();
  hidePreloader();
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style lang="scss">
@use 'assets/styles/base/functions' as *;
@use 'assets/styles/base/mixins' as *;

.preloader {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-black);
  color: var(--color-white);

  &__text {
    font-family: var(--font-family-body);
    font-size: rem(48);
    font-weight: var(--body-font-weight);
    line-height: var(--body-line-height);

    @include respond-below(md) {
      font-size: rem(36);
    }

    @include respond-below(sm) {
      font-size: rem(24);
    }
  }
}

.preloader-fade-enter-active,
.preloader-fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.preloader-fade-enter,
.preloader-fade-leave-to {
  opacity: 0;
}
</style>
