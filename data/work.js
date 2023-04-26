export default [
  {
    image: 'vuesume-preview.jpg',
    title: 'Vuesume',
    tags: [
      { name: 'vue', link: 'https://vuejs.org/' },
      { name: 'quasar', link: 'https://quasar.dev/' },
      { name: 'firebase', link: 'https://firebase.google.com/' },
    ],
    brief: `A quick resume builder built with <span class="text-color-accent underline">Vue</span>, <span class="text-color-accent underline">Quasar</span> and <span class="text-color-accent underline">Firebase</span>. You can switch between different templates with a single click. It's fully responsive and usable in mobile. Also you can share your resume or print as PDF.`,
    class: 'mix vue flex flex-wrap w-full mb-6',
    layoutClass:
      'w-full md:w-1/2 md:pl-6 md:max-w-lg flex flex-col justify-center',
    contentClass:
      'p-4 my-4 bg-background-light dark:bg-background-dark rounded-lg shadow-lg border border-gray-200 dark:border-color-dark',
    sourceLink: 'https://bitbucket.org/khairulanik/vuesume/',
    demoLink: 'https://vuesume.github.io/',
  },
  {
    image: 'braferi.png',
    title: 'Shopify Storefront',
    tags: [
      { name: 'react', link: 'https://reactjs.org/' },
      { name: 'next js', link: 'https://nextjs.org/' },
      { name: 'react query', link: 'https://tanstack.com/query/v3/' },
      { name: 'graphQl', link: 'https://graphql.org/' },
    ],
    brief: `A demo ecommerce storefront for women lingerie built with <span class="text-color-accent underline">Next js</span>, <span class="text-color-accent underline">React</span> and <span class="text-color-accent underline">GraphQl</span>. It uses Shopify Storefront API. Currently it only comprises the main product shopping flow.`,
    class: 'mix react flex flex-wrap w-full mb-6',
    layoutClass:
      'w-full md:w-1/2 md:pr-6 md:max-w-lg md:order-first flex flex-col justify-center',
    contentClass:
      'p-4 my-4 bg-background-light dark:bg-background-dark rounded-lg shadow-lg border border-gray-200 dark:border-color-dark',
    sourceLink: 'https://github.com/thekhairul/braferi-next',
    demoLink: 'https://braferi.com/',
  },
  {
    image: 'citybusbd-preview.jpg',
    title: 'Citybusbd',
    tags: [
      { name: 'react', link: 'https://reactjs.org/' },
      { name: 'next js', link: 'https://nextjs.org/' },
      { name: 'chakra UI', link: 'https://chakra-ui.com/' },
    ],
    brief: `A basic bus route checker app for cities in Bangladesh. It uses <span class="text-color-accent underline">Next js</span>, <span class="text-color-accent underline">React</span> and <span class="text-color-accent underline">Chakra UI</span>.`,
    class: 'mix react flex flex-wrap w-full mb-6',
    layoutClass:
      'w-full md:w-1/2 md:pl-6 md:max-w-lg flex flex-col justify-center',
    contentClass:
      'p-4 my-4 bg-background-light dark:bg-background-dark rounded-lg shadow-lg border border-gray-200 dark:border-color-dark',
    sourceLink: 'https://github.com/thekhairul/citybusbd',
    demoLink: 'https://www.citybusbd.com/',
  },
  {
    image: null,
    title: 'Nuxt Blog',
    tags: [
      { name: 'vue', link: 'https://vuejs.org/' },
      { name: 'nuxt', link: 'https://nuxtjs.org/' },
      { name: 'tailwind', link: 'https://tailwindcss.com/' },
      { name: 'strapi', link: 'https://strapi.io/' },
    ],
    brief:
      'My personal blog that is built with <span class="text-color-accent underline">Nuxt</span> and <span class="text-color-accent underline">Strapi</span>',
    class:
      'mix vue w-full md:w-auto flex-1 p-4 rounded-lg shadow-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-background-dark',
    layoutClass: '',
    contentClass: 'my-4',
    sourceLink: 'https://bitbucket.org/khairulanik/serious.dev.ui/src/master/',
    demoLink: 'https://theserious.dev/',
  },
  {
    image: null,
    title: 'Nuxt Todo',
    tags: [
      { name: 'vue', link: 'https://vuejs.org/' },
      { name: 'nuxt', link: 'https://nuxtjs.org/' },
      { name: 'tailwind', link: 'https://tailwindcss.com/' },
    ],
    brief: 'Todo app built with nuxt and tailwind.',
    class:
      'mix vue w-full md:w-auto flex-1 p-4 rounded-lg shadow-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-background-dark',
    layoutClass: '',
    contentClass: 'my-4',
    sourceLink: null,
    demoLink: 'https://thekhairul.github.io/',
  },
  {
    image: null,
    title: 'BdgeoAPI',
    tags: [{ name: 'node', link: 'https://nodejs.org/en/' }],
    brief:
      'A simple node api to retrieve district, sub-district and unions in Bangladesh',
    class:
      'mix node w-full md:w-auto flex-1 p-4 rounded-lg shadow-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-background-dark',
    layoutClass: '',
    contentClass: 'my-4',
    sourceLink: 'https://github.com/thekhairul/bdgeoapi',
    demoLink: null,
  },
];
