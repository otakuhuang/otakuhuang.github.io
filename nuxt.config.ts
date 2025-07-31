// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Otakuhuang',
      htmlAttrs: {
        lang: 'zh-CN',
      },
    },
  },
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/ui'],
  css: ['@/assets/css/main.css'],
  devtools: { enabled: true }
})
