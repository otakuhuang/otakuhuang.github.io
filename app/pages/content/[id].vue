<template>
  <div v-if="content" class="py-16">
    <div class="container mx-auto px-4 max-w-4xl">
      <!-- Article Header -->
      <header class="mb-12">
        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-4">
                  <UBadge
          v-for="tag in content.tags"
          :key="tag"
          :label="tag"
          color="primary"
          variant="soft"
          size="sm"
        />
        </div>

        <!-- Title -->
        <h1 class="text-4xl font-bold text-gray-900 mb-6">
          {{ content.title }}
        </h1>

        <!-- Meta -->
        <div class="flex items-center justify-between text-gray-600 mb-8">
          <div class="flex items-center space-x-4">
            <span class="flex items-center space-x-1">
              <UIcon name="i-heroicons-calendar" class="w-4 h-4" />
              <span>{{ formatDate(content.publishedAt) }}</span>
            </span>
            <span class="flex items-center space-x-1">
              <UIcon name="i-heroicons-clock" class="w-4 h-4" />
                          <span>{{ content.readTime }} 分钟</span>
          </span>
          <span class="flex items-center space-x-1">
            <UIcon name="i-heroicons-user" class="w-4 h-4" />
            <span>{{ content.author }}</span>
          </span>
        </div>

        <!-- Featured Badge -->
        <UBadge
          v-if="content.featured"
          label="精选"
          color="warning"
          variant="soft"
        />
      </div>

      <!-- Cover Image -->
      <div v-if="content.coverImage" class="mb-8">
        <img
          :src="content.coverImage"
          :alt="content.title"
          class="w-full h-64 object-cover rounded-lg"
        />
      </div>

      <!-- Excerpt -->
      <p class="text-xl text-gray-600 leading-relaxed">
        {{ content.excerpt }}
      </p>
      </header>

      <!-- Article Content -->
      <article class="prose prose-lg max-w-none">
        <div class="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <!-- 这里将来会显示 markdown 渲染的内容 -->
          <div class="text-gray-700 leading-relaxed">
            <p>{{ content.content }}</p>
            <p class="mt-4">这是文章的完整内容。在实际应用中，这里会显示从 markdown 文件解析并渲染的内容。</p>
          </div>
        </div>
      </article>

      <!-- Article Footer -->
      <footer class="mt-12 pt-8 border-t border-gray-200">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <UAvatar
              src="/images/avatar.jpg"
              alt="otakuhuang"
              size="sm"
            />
            <div>
              <p class="font-medium text-gray-900">otakuhuang</p>
              <p class="text-sm text-gray-600">前端开发工程师</p>
            </div>
          </div>

          <div class="flex space-x-4">
            <UButton
              icon="i-simple-icons-github"
              color="primary"
              variant="ghost"
              size="sm"
              to="https://github.com/otakuhuang"
              target="_blank"
              aria-label="GitHub"
            />
            <UButton
              icon="i-simple-icons-twitter"
              color="primary"
              variant="ghost"
              size="sm"
              to="https://twitter.com/otakuhuang"
              target="_blank"
              aria-label="Twitter"
            />
          </div>
        </div>
      </footer>

      <!-- Navigation -->
      <nav class="mt-12 pt-8 border-t border-gray-200">
        <div class="flex items-center justify-between">
          <NuxtLink
            v-if="prevContent"
            :to="`/content/${prevContent.id}`"
            class="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <UIcon name="i-heroicons-arrow-left" class="w-4 h-4" />
            <span>{{ prevContent.title }}</span>
          </NuxtLink>
          <div v-else></div>

          <NuxtLink
            v-if="nextContent"
            :to="`/content/${nextContent.id}`"
            class="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <span>{{ nextContent.title }}</span>
            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
          </NuxtLink>
          <div v-else></div>
        </div>
      </nav>
    </div>
  </div>

  <!-- 404 Page -->
  <div v-else class="py-16">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">内容未找到</h1>
      <p class="text-gray-600 mb-8">抱歉，您访问的内容不存在。</p>
      <UButton
        to="/content"
        color="primary"
        size="lg"
      >
        返回内容列表
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
// import type { BlogPost } from '~/types/blog'

// 获取路由参数
const route = useRoute()
const contentId = route.params.id as string

// 获取内容数据
const { allContents } = useContent()

// 获取当前文章和所有文章
const content = allContents.find(c => c.id === contentId)

// 计算上一篇和下一篇文章
const currentIndex = allContents.findIndex(c => c.id === contentId)
const prevContent = currentIndex > 0 ? allContents[currentIndex - 1] : null
const nextContent = currentIndex < allContents.length - 1 ? allContents[currentIndex + 1] : null

// 格式化日期
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// SEO 设置
useSeoMeta({
  title: content ? `${content.title} - otakuhuang` : '内容未找到 - otakuhuang',
  description: content ? content.excerpt : '抱歉，您访问的内容不存在。',
  keywords: content ? content.tags.join(', ') : '内容',
  author: 'otakuhuang',
  ogTitle: content ? content.title : '内容未找到',
  ogDescription: content ? content.excerpt : '抱歉，您访问的内容不存在。',
  ogImage: content?.coverImage || '/images/og-image.jpg'
})
</script> 