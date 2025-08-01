<template>
  <div>
    <!-- Hero Section -->
    <HeroSection :stats="stats" />

    <!-- Featured Contents -->
    <FeaturedPosts :featured-contents="featuredContents" />

    <!-- About Section -->
    <AboutSection :author="author" />
  </div>
</template>

<script setup lang="ts">
// 导入组件
import HeroSection from '~/components/home/HeroSection.vue'
import FeaturedPosts from '~/components/home/FeaturedPosts.vue'
import AboutSection from '~/components/home/AboutSection.vue'

// 获取内容数据
const { featuredContents, author, stats } = useContent()

// SEO 设置
useSeoMeta({
  title: 'otakuhuang - 内容站',
  description: '分享前端开发、TypeScript、Vue.js 等领域的技术见解和学习心得。',
  keywords: '前端开发, TypeScript, Vue.js, Nuxt.js, 内容站',
  author: 'otakuhuang',
  ogTitle: 'otakuhuang - 内容站',
  ogDescription: '分享前端开发、TypeScript、Vue.js 等领域的技术见解和学习心得。',
  // ogImage: '/images/og-image.jpg',
  twitterCard: 'summary_large_image'
})
</script> 