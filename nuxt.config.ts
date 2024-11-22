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
            'Experienced Frontend Developer with over 4 years of expertise in JavaScript, CSS, SCSS, SASS, Tailwind CSS, Bootstrap, and Unocss. Proficient in Vue.js (Vue2/Vue3) and Nuxt, I create stunning, interactive animations and user-friendly interfaces for your web projects. Available for remote work only.',
        },
        {
          name: 'keywords',
          content: 'portfolio, web developer, frontend developer, etc.',
        },
        {
          property: 'og:title',
          content: 'Vasyl Tsiutsyk | Frontend Developer',
        },
        {
          property: 'og:description',
          content:
            'Experienced Frontend Developer with over 4 years of expertise in JavaScript, CSS, SCSS, SASS, Tailwind CSS, Bootstrap, and Unocss. Proficient in Vue.js (Vue2/Vue3) and Nuxt, I create stunning, interactive animations and user-friendly interfaces for your web projects. Available for remote work only.',
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
          content: 'https://vasyl-tsiutsyk.pages.dev/',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://vasyl-tsiutsyk.pages.dev/',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        },
      ],
    },
  },
});
