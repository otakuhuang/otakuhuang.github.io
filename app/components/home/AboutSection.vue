<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- About Content -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">关于我</h2>
            <p class="text-gray-600 leading-relaxed mb-6">
              {{ author.bio }}
            </p>
            
            <!-- Skills -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">技术栈</h3>
              <div class="flex flex-wrap gap-2">
                <UBadge
                  v-for="skill in skills"
                  :key="skill"
                  :label="skill"
                  color="primary"
                  variant="soft"
                />
              </div>
            </div>

            <!-- Social Links -->
            <div class="flex space-x-4">
              <UButton
                v-if="author.social.github"
                :to="author.social.github"
                icon="i-simple-icons-github"
                color="primary"
                variant="ghost"
                target="_blank"
                aria-label="GitHub"
              />
              <UButton
                v-if="author.social.twitter"
                :to="author.social.twitter"
                icon="i-simple-icons-twitter"
                color="primary"
                variant="ghost"
                target="_blank"
                aria-label="Twitter"
              />
              <UButton
                v-if="author.social.linkedin"
                :to="author.social.linkedin"
                icon="i-simple-icons-linkedin"
                color="primary"
                variant="ghost"
                target="_blank"
                aria-label="LinkedIn"
              />
            </div>
          </div>

          <!-- Avatar -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <UAvatar
                :src="author.avatar"
                :alt="author.name"
                size="2xl"
                class="ring-4 ring-white shadow-xl"
              />
              <div class="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Author } from '~/types/blog'

interface Props {
  author: Author
}

defineProps<Props>()

const skills = [
  'Vue.js',
  'TypeScript',
  'Nuxt.js',
  'React',
  'Node.js',
  'CSS/SCSS',
  'Git',
  'Docker'
]
</script> 