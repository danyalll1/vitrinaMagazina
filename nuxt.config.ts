export default defineNuxtConfig({
  compatibilityDate: '2024-11-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: [
    '~/public/assets/styles/base.sass',
    '~/public/assets/styles/fonts.sass',
    '~/public/assets/styles/vars/_colors.sass',
  ],
  features:{
    inlineStyles: false,
  },
  vite: {
    build: {
      cssCodeSplit: true
    },
    css: {
      preprocessorOptions: {
        devSourcemap: true,
        sass: {
          api: 'modern-compiler',
          additionalData: '@use "~/public/assets/styles/abstracts.sass" as * \n',
        },
      }
    }
  },
  routeRules:{
    '/': { swr: true },
    '/product/**' : { ssr: true},
    "/contacts": {static: true},

  }
})
