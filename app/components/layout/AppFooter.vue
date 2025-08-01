<template>
  <footer class="bg-gray-50 border-t border-gray-200 pt-4 pb-4">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- About -->
        <div>
          <div class="flex items-center space-x-3 mb-4">
            <UAvatar
              :src="site.icon"
              :alt="site.description"
              size="sm"
            />
            <div>
              <h3 class="text-lg font-semibold text-gray-900">{{ author.name }}</h3>
              <p class="text-sm text-gray-600">{{ author.bio }}</p>
            </div>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ site.description }}
          </p>
        </div>

        <!-- Social Links -->
        <div>
          <h4 class="text-lg font-semibold text-gray-900 mb-4">关注我</h4>
          <div class="flex space-x-4">
            <UButton
              v-if="author.social.github"
              icon="i-simple-icons-github"
              color="primary"
              variant="ghost"
              size="sm"
              :to="author.social.github"
              target="_blank"
              aria-label="GitHub"
            />
            <UButton
              v-if="author.social.twitter"
              icon="i-simple-icons-twitter"
              color="primary"
              variant="ghost"
              size="sm"
              :to="author.social.twitter"
              target="_blank"
              aria-label="Twitter"
            />
            <UButton
              v-if="author.social.linkedin"
              icon="i-simple-icons-linkedin"
              color="primary"
              variant="ghost"
              size="sm"
              :to="author.social.linkedin"
              target="_blank"
              aria-label="LinkedIn"
            />
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-200 mt-8 pt-8 text-center">
        <p class="text-gray-600 text-sm">
          © 2025-{{ new Date().getFullYear() }} otakuhuang. 保留所有权利。
        </p>
      </div>
    </div>
  </footer>
</template> 

<script setup lang="ts">
const { site, author } = useAppConfig();
</script>