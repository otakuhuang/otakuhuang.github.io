<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- About Content -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">关于我</h2>
            <p class="text-gray-600 leading-relaxed mb-6">
              <UAvatar
                :src="config.author.avatar"
                :alt="config.author.name"
                size="lg"
                class="mb-4"
              />
            </p>
            
            <!-- Skills -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">技术栈</h3>
              <div class="flex flex-wrap gap-2">
                <UBadge
                  v-for="skill in config.author.skill"
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
                v-if="config.author.social.github"
                :to="config.author.social.github"
                icon="i-simple-icons-github"
                color="primary"
                variant="ghost"
                target="_blank"
                aria-label="GitHub"
              />
              <UButton
                v-if="config.author.social.twitter"
                :to="config.author.social.twitter"
                icon="i-simple-icons-twitter"
                color="primary"
                variant="ghost"
                target="_blank"
                aria-label="Twitter"
              />
              <UButton
                v-if="config.author.social.linkedin"
                :to="config.author.social.linkedin"
                icon="i-simple-icons-linkedin"
                color="primary"
                variant="ghost"
                target="_blank"
                aria-label="LinkedIn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useAppConfig();
</script> 