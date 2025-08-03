<template>
  <div class="py-16">
    <div class="container mx-auto px-4">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">所有内容</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          这里是我分享的所有技术内容，涵盖了前端开发、TypeScript、Vue.js 等热门话题。
        </p>
      </div>

      <!-- Contents Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ContentCard
          v-for="content in contents"
          :key="content.id"
          :content="content"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 导入组件
import ContentCard from '~/components/content/ContentCard.vue';

// 获取静态内容数据
const { data: contents } = await useAsyncData(() => queryCollection('content').order('publishedAt', 'DESC').all());

// SEO 设置
useSeoMeta({
  title: '所有文章 - otakuhuang',
  description: '浏览所有技术文章, 涵盖前端开发、TypeScript、Vue.js 等领域。',
  keywords: '前端开发, TypeScript, Vue.js, Nuxt.js, 技术文章',
  author: 'otakuhuang',
});
</script> 