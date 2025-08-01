<template>
  <div>
    <section class="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">关于我</h1>
          <p class="text-xl text-gray-600">
            欢迎来到我的个人网站
          </p>
        </div>
      </div>
    </section>

    <AboutSection :author="author" />
  </div>
</template>

<script setup lang="ts">
// 导入组件
import AboutSection from '~/components/home/AboutSection.vue'

// 获取作者数据
const { author } = useContent()

// SEO 设置
useSeoMeta({
  title: '关于我 - otakuhuang',
  description: '了解关于 otakuhuang 的信息，包括技术栈、工作经验和联系方式。',
  keywords: '关于, 个人介绍, 技术栈, Vue.js, Nuxt.js',
  author: 'otakuhuang',
  ogTitle: '关于我 - otakuhuang',
  ogDescription: '了解关于 otakuhuang 的信息，包括技术栈、工作经验和联系方式。',
  twitterCard: 'summary_large_image'
})

// 页面配置
definePageMeta({
  title: '关于'
})
</script>