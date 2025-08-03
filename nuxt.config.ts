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
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/image', '@nuxt/content', 'nuxt-gtag'],
  css: ['@/assets/css/main.css'],
  gtag: {
    id: 'G-3N2NVYHG2L',
  },
  devtools: { enabled: true },
});