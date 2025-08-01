<template>
  <footer class="mt-12 pt-8 border-t border-gray-200">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <UAvatar
          :src="author.avatar"
          :alt="author.name"
          size="sm" 
        />
        <div>
          <p class="font-medium text-gray-900">{{ author.name }}</p>
          <p class="text-sm text-gray-600">{{ author.bio }}</p>
        </div>
    </div>

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
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { author} = useAppConfig();
</script>