// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Vasyl Tsiutsyk | Frontend Developer',
      meta: [
        {
          name: 'description',
          content:
            'Experienced Frontend Developer with over 4 years of expertise in JavaScript, CSS, SCSS, SASS, Tailwind CSS, Bootstrap, and Unocss. Proficient in Vue.js (Vue2/Vue3) and Nuxt, I create stunning, interactive animations and user-friendly interfaces for your web projects. Available for remote work only.',
        },
        { name: 'keywords', content: 'portfolio, web developer, frontend developer, etc.' },
        { property: 'og:title', content: 'Vasyl Tsiutsyk | Frontend Developer' },
        {
          property: 'og:description',
          content:
            'Experienced Frontend Developer with over 4 years of expertise in JavaScript, CSS, SCSS, SASS, Tailwind CSS, Bootstrap, and Unocss. Proficient in Vue.js (Vue2/Vue3) and Nuxt, I create stunning, interactive animations and user-friendly interfaces for your web projects. Available for remote work only.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'public/me.webp' },
        { property: 'og:url', content: 'https://vasyl-tsiutsyk.pages.dev/' },
      ],
      link: [{ rel: 'canonical', href: 'https://vasyl-tsiutsyk.pages.dev/' }],
    },
  },
});
