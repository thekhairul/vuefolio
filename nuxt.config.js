export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vuefolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-anime.js', mode: 'client' },
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '~/plugins/mixitup', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://github.com/nuxt-community/google-fonts-module
    [
      '@nuxtjs/google-fonts',
      {
        display: 'swap',
        families: {
          Poppins: [200, 400, 500, 800]
        }
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: [
              'faBars',
              'faCloudDownloadAlt',
              'faArrowLeft',
              'faArrowCircleRight',
              'faArrowCircleLeft',
              'faQuoteLeft'
            ]
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: [
              'faFacebook',
              'faGithub',
              'faTwitter',
              'faMedium',
              'faLinkedin'
            ]
          }
        ]
      }
    ]
  ],

  // https://github.com/nuxt-community/style-resources-module
  styleResources: {
    scss: ['./assets/css/_variables.scss']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
