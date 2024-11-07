<template>
  <NuxtLayout :layout="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// import { useMobileDetection } from 'vue3-mobile-detection';

const layout = 'default';

// const { isMobile } = useMobileDetection();
// const isMobileRef = computed(() => isMobile());

// const updateBodyClass = () => {
//   const body = document.body;
//   if (!body) return;

//   if (isMobileRef.value) {
//     body.classList.remove('_pc');
//     body.classList.add('_mobile');
//   } else {
//     body.classList.remove('_mobile');
//     body.classList.add('_pc');
//   }
// };

// onMounted(() => {
//   updateBodyClass();
// });
</script>
