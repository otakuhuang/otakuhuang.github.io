<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">精选文章</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          这些是我最受欢迎和最有价值的内容, 涵盖了前端开发、TypeScript、Vue.js 等热门话题。
        </p>
      </div>

      <!-- Featured Contents Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ContentCard
          v-for="content in featuredContents"
          :key="content.id"
          :content="content"
        />
      </div>

      <!-- View All Button -->
      <div class="text-center mt-12">
        <UButton
          to="/content"
          color="primary"
          variant="outline"
          size="lg"
          class="font-medium"
        >
          查看所有文章
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContentCard from '~/components/content/ContentCard.vue';
import type { ContentCollectionItem } from '@nuxt/content';

interface Props {
  featuredContents: ContentCollectionItem[]
}

defineProps<Props>();
</script> 