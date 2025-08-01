<template>
  <header class="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <UAvatar
            src="/images/icon.png"
            alt="Otakuhuang"
            size="sm"
          />
          <div>
            <h1 class="text-xl font-bold text-gray-900">otakuhuang</h1>
            <p class="text-sm text-gray-600">内容站</p>
          </div>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink
            to="/"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            active-class="text-blue-600 font-medium"
          >
            首页
          </NuxtLink>
          <NuxtLink
            to="/content"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            active-class="text-blue-600 font-medium"
          >
            文章
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            active-class="text-blue-600 font-medium"
          >
            关于
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            active-class="text-blue-600 font-medium"
          >
            联系
          </NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <UButton
          icon="i-heroicons-bars-3"
          color="primary"
          variant="ghost"
          class="md:hidden"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        />
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden mt-4 pb-4 border-t border-gray-200"
      >
        <div class="flex flex-col space-y-4 pt-4">
          <NuxtLink
            to="/"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            active-class="text-blue-600 font-medium"
            @click="isMobileMenuOpen = false"
          >
            首页
          </NuxtLink>
          <NuxtLink
            to="/content"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            active-class="text-blue-600 font-medium"
            @click="isMobileMenuOpen = false"
          >
            文章
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            active-class="text-blue-600 font-medium"
            @click="isMobileMenuOpen = false"
          >
            关于
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="text-gray-700 hover:text-blue-600 transition-colors"
            active-class="text-blue-600 font-medium"
            @click="isMobileMenuOpen = false"
          >
            联系
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false);
</script> 