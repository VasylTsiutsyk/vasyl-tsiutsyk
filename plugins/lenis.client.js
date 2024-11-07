// /plugins/lenis.client.js
import Lenis from '@studio-freight/lenis';

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing function
    smoothWheel: true,
    smoothTouch: true,
  });

  // Start the Lenis animation loop
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Optionally, make Lenis available globally
  nuxtApp.provide('lenis', lenis);
});
