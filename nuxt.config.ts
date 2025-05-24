// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-07',
  devtools: { enabled: false },
  css: ['~/assets/styles/index.scss'],

  app: {
    head: {
      title: 'Vasyl Tsiutsyk | Frontend Developer',
      meta: [
        {
          name: 'description',
          content:
            'Vasyl Tsiutsyk. Experienced Frontend Developer with 4+ years of expertise in JavaScript, CSS, SCSS, SASS, TailwindCSS, Bootstrap, and Unocss. Proficient in Vue.js (Vue2/Vue3) and Nuxt, I create stunning, interactive animations and user-friendly interfaces for your web projects. Available for remote work only.',
        },
        {
          name: 'keywords',
          content: 'Василь Цюцик, Цюцик Василь, portfolio, web developer, frontend developer',
        },
        {
          property: 'og:title',
          content: 'Vasyl Tsiutsyk | Frontend Developer',
        },
        {
          property: 'og:description',
          content:
            'Vasyl Tsiutsyk. Experienced Frontend Developer with 4+ years of expertise in JavaScript, CSS, SCSS, SASS, TailwindCSS, Bootstrap, and Unocss. Proficient in Vue.js (Vue2/Vue3) and Nuxt, I create stunning, interactive animations and user-friendly interfaces for your web projects. Available for remote work only.',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: 'me.webp',
        },
        {
          property: 'og:url',
          content: 'https://tsvv-portfolio-fb903feaf5f0.herokuapp.com/',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://tsvv-portfolio-fb903feaf5f0.herokuapp.com/',
        },
        {
          rel: 'alternate',
          hreflang: 'uk',
          href: 'https://tsvv-portfolio-fb903feaf5f0.herokuapp.com/',
        },
        {
          rel: 'alternate',
          hreflang: 'en',
          href: 'https://tsvv-portfolio-fb903feaf5f0.herokuapp.com/',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        },
      ],
    },
  },

  modules: ['nuxt-aos'],

  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  },
});
