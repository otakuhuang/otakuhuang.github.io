<template>
  <div>
    <section class="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">联系我</h1>
          <p class="text-xl text-gray-600">
            欢迎通过以下方式与我联系
          </p>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- 联系信息 -->
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-6">联系信息</h2>
              <p class="text-gray-600 mb-8">
                如果您有任何问题、建议或合作意向，欢迎随时通过以下方式与我联系。
              </p>
              
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <UIcon
                      name="i-heroicons-envelope"
                      class="w-6 h-6 text-blue-600" 
                    />
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-900">邮箱</h3>
                    <p class="mt-1 text-gray-600">{{ author.social.email }}</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <UIcon
                      name="i-heroicons-chat-bubble-left-right"
                      class="w-6 h-6 text-blue-600" 
                    />
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-medium text-gray-900">社交媒体</h3>
                    <p class="mt-1 text-gray-600">您可以通过以下社交平台与我互动</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 社交媒体链接 -->
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-6">关注我</h2>
              <div class="flex space-x-4">
                <UButton
                  v-if="author.social.github"
                  :to="author.social.github"
                  icon="i-simple-icons-github"
                  color="primary"
                  variant="outline"
                  size="lg"
                  target="_blank"
                  aria-label="GitHub"
                />
                <UButton
                  v-if="author.social.twitter"
                  :to="author.social.twitter"
                  icon="i-simple-icons-twitter"
                  color="primary"
                  variant="outline"
                  size="lg"
                  target="_blank"
                  aria-label="Twitter"
                />
                <UButton
                  v-if="author.social.linkedin"
                  :to="author.social.linkedin"
                  icon="i-simple-icons-linkedin"
                  color="primary"
                  variant="outline"
                  size="lg"
                  target="_blank"
                  aria-label="LinkedIn"
                />
              </div>
              
              <div class="mt-12">
                <h3 class="text-lg font-medium text-gray-900 mb-4">留言</h3>
                <p class="text-gray-600 mb-4">
                  您也可以通过以下表单给我留言，我会尽快回复您。
                </p>
                <UAlert 
                  color="primary" 
                  variant="soft" 
                  title="留言功能正在开发中" 
                  description="目前请通过上述社交媒体或邮箱与我联系。"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { author } = useAppConfig();

// SEO 设置
useSeoMeta({
  title: '联系我 - otakuhuang',
  description: '通过邮箱或社交媒体联系 otakuhuang, 欢迎交流前端开发、Vue.js、Nuxt.js 等技术话题。',
  keywords: '联系, 联系方式, 社交媒体, 邮箱, Vue.js, Nuxt.js',
  author: 'otakuhuang',
  ogTitle: '联系我 - otakuhuang',
  ogDescription: '通过邮箱或社交媒体联系 otakuhuang, 欢迎交流前端开发、Vue.js、Nuxt.js 等技术话题。',
  twitterCard: 'summary_large_image',
});

// 页面配置
definePageMeta({
  title: '联系',
});
</script>