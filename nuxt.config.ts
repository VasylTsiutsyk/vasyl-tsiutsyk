// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Vasyl Tsiutsyk | Frontend Developer',
      meta: [
        { name: 'description', content: 'A brief description of your portfolio site' },
        { name: 'keywords', content: 'portfolio, web developer, frontend developer, etc.' },
        { property: 'og:title', content: 'Vasyl Tsiutsyk | Frontend Developer' },
        { property: 'og:description', content: 'A brief description of your portfolio site' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/path/to/your-image.jpg' },
        { property: 'og:url', content: 'https://vasyl-tsiutsyk.pages.dev/' },
      ],
      link: [{ rel: 'canonical', href: 'https://vasyl-tsiutsyk.pages.dev/' }],
    },
  },
});
