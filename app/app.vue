<template>
  <UApp>
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
    <!-- <NuxtRouteAnnouncer /> -->
  </UApp>
</template>

<script setup lang="ts">
// 导入布局组件
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
</script>
