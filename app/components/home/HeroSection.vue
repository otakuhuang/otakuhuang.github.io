<template>
  <section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Avatar and Name -->
        <div class="flex justify-center mb-8">
          <UAvatar
            src="https://avatars.githubusercontent.com/u/61155101?v=4&size=64"
            alt="Otakuhuang"
            size="xl"
            class="ring-4 ring-white shadow-lg"
          />
        </div>

        <!-- Welcome Message -->
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          欢迎来到我的
          <span class="text-blue-600">技术博客</span>
        </h1>
        <p class="text-xl text-gray-600 mb-8 leading-relaxed">
          分享前端开发、TypeScript、Vue.js 等领域的技术见解和学习心得。
          在这里，我们一起探索现代前端技术的奥秘。
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <UButton
            to="/content"
            color="primary"
            size="lg"
            class="font-medium"
          >
            浏览文章
          </UButton>
          <UButton
            to="/about"
            color="primary"
            variant="ghost"
            size="lg"
            class="font-medium"
          >
            了解更多
          </UButton>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600 mb-2">
              {{ stats.totalContents }}
            </div>
            <div class="text-gray-600">内容总数</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600 mb-2">
              {{ stats.totalViews }}
            </div>
            <div class="text-gray-600">总浏览量</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600 mb-2">
              {{ stats.totalLikes }}
            </div>
            <div class="text-gray-600">获得点赞</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { BlogStats } from '~/types/blog'

interface Props {
  stats: BlogStats
}

defineProps<Props>()
</script> 