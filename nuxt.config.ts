// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'otakuhuang',
      htmlAttrs: {
        lang: 'zh-CN',
      },
    },
  },
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/image'],
  css: ['@/assets/css/main.css'],
  devtools: { enabled: true },
});