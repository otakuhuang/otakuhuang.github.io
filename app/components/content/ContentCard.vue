<template>
  <article class="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 overflow-hidden">
    <!-- Cover Image -->
    <div
      v-if="content.coverImage"
      class="aspect-video overflow-hidden"
    >
      <NuxtImg
        :src="content.coverImage"
        :alt="content.title"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

    <!-- Content -->
    <div class="p-6">
      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-3">
        <UBadge
          v-for="tag in content.tags.slice(0, 3)"
          :key="tag"
          :label="tag"
          color="primary"
          variant="soft"
          size="xs"
        />
      </div>

      <!-- Title -->
      <h3 class="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
        <NuxtLink
          :to="`/content/${content.id}`"
          class="hover:text-blue-600 transition-colors"
        >
          {{ content.title }}
        </NuxtLink>
      </h3>

      <!-- Excerpt -->
      <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
        {{ content.excerpt }}
      </p>

      <!-- Meta -->
      <div class="flex items-center justify-between text-sm text-gray-500">
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
        </div>

        <!-- Featured Badge -->
        <UBadge
          v-if="content.featured"
          label="精选"
          color="warning"
          variant="soft"
          size="xs"
        />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { ContentCollectionItem } from '@nuxt/content';

interface Props {
  content: ContentCollectionItem
}

defineProps<Props>();

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 