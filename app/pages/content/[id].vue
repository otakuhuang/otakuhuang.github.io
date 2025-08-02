<template>
  <div
    v-if="content"
    class="py-16"
  >
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
              <UIcon
                name="i-heroicons-calendar"
                class="w-4 h-4" 
              />
              <span>{{ formatDate(content.publishedAt) }}</span>
            </span>
            <span class="flex items-center space-x-1">
              <UIcon
                name="i-heroicons-clock"
                class="w-4 h-4" 
              />
              <span>{{ content.readTime }} 分钟</span>
            </span>
            <span class="flex items-center space-x-1">
              <UIcon
                name="i-heroicons-user"
                class="w-4 h-4" 
              />
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
        <div
          v-if="content.coverImage"
          class="mb-8"
        >
          <img
            :src="content.coverImage"
            :alt="content.title"
            class="w-full h-64 object-cover rounded-lg"
          >
        </div>

        <!-- Excerpt -->
        <p class="text-xl text-gray-600 leading-relaxed">
          {{ content.excerpt }}
        </p>
      </header>

      <!-- Article Content -->
      <article v-if="content" class="prose prose-lg max-w-none">
        <div class="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <!-- 这里将来会显示 markdown 渲染的内容 -->
          <div class="text-gray-700 leading-relaxed">
            <ContentRenderer :value="content" />
          </div>
        </div>
      </article>

      <!-- Article Footer -->
      <ArticleFooter />

      <!-- Navigation -->
      <nav class="mt-12 pt-8 border-t border-gray-200">
        <div class="flex items-center justify-between">
          <NuxtLink
            v-if="prevContent"
            :to="`/${prevContent.id}`"
            class="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <UIcon
              name="i-heroicons-arrow-left"
              class="w-4 h-4" 
            />
            <span>{{ prevContent.title }}</span>
          </NuxtLink>
          <div v-else />

          <NuxtLink
            v-if="nextContent"
            :to="`/${nextContent.id}`"
            class="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <span>{{ nextContent.title }}</span>
            <UIcon
              name="i-heroicons-arrow-right"
              class="w-4 h-4" 
            />
          </NuxtLink>
          <div v-else />
        </div>
      </nav>
    </div>
  </div>

  <!-- 404 Page -->
  <div
    v-else
    class="py-16"
  >
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
import ArticleFooter from './components/ArticleFooter.vue';

// 获取路由参数
const route = useRoute();

// 获取当前文章和所有文章
const id = route.path.slice(1);
const { data: content } = await useAsyncData(route.path, () => queryCollection('content').where('id', '=', id).first());

// 计算上一篇和下一篇文章
const { data: prevContent } = await useAsyncData(() => queryCollection('content').select('id', 'title', 'publishedAt').where('publishedAt', '>', content.value?.publishedAt).order('publishedAt', 'ASC').limit(1).first());
const { data: nextContent } = await useAsyncData(() => queryCollection('content').select('id', 'title', 'publishedAt').where('publishedAt', '<', content.value?.publishedAt).order('publishedAt', 'DESC').limit(1).first());

// 格式化日期
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// SEO 设置
useSeoMeta({
  title: content ? `${content.value?.title} - otakuhuang` : '内容未找到 - otakuhuang',
  description: content ? content.value?.excerpt : '抱歉，您访问的内容不存在。',
  keywords: content ? content.value?.tags.join(', ') : '内容',
  author: 'otakuhuang',
  ogTitle: content ? content.value?.title : '内容未找到',
  ogDescription: content ? content.value?.excerpt : '抱歉，您访问的内容不存在。',
  ogImage: content.value?.coverImage || '/images/og-image.jpg',
});
</script>