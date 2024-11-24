import { createResolver } from '@nuxt/kit'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [],
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
  hooks: {
    'pages:routerOptions' ({ files }) {
      const resolver = createResolver(import.meta.url)
      // add a route
      files.push({
        path: resolver.resolve('./app/router-options.ts'),
        optional: true
      })
    }
  }
})
