<template>
  <footer class="bg-gray-50 border-t border-gray-200 mt-16">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- About -->
        <div>
          <div class="flex items-center space-x-3 mb-4">
            <UAvatar
              src="/images/avatar.jpg"
              alt="Otakuhuang"
              size="sm"
            />
            <div>
              <h3 class="text-lg font-semibold text-gray-900">otakuhuang</h3>
              <p class="text-sm text-gray-600">内容站</p>
            </div>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed">
            分享前端开发、TypeScript、Vue.js 等领域的技术见解和学习心得。
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold text-gray-900 mb-4">快速链接</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/"
                class="text-gray-600 hover:text-blue-600 transition-colors text-sm"
              >
                首页
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/content"
                class="text-gray-600 hover:text-blue-600 transition-colors text-sm"
              >
                文章
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/about"
                class="text-gray-600 hover:text-blue-600 transition-colors text-sm"
              >
                关于
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="text-gray-600 hover:text-blue-600 transition-colors text-sm"
              >
                联系
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <div>
          <h4 class="text-lg font-semibold text-gray-900 mb-4">关注我</h4>
          <div class="flex space-x-4">
            <UButton
              icon="i-simple-icons-github"
              color="primary"
              variant="ghost"
              size="sm"
              to="https://github.com/otakuhuang"
              target="_blank"
              aria-label="GitHub"
            />
            <UButton
              icon="i-simple-icons-twitter"
              color="primary"
              variant="ghost"
              size="sm"
              to="https://twitter.com/otakuhuang"
              target="_blank"
              aria-label="Twitter"
            />
            <UButton
              icon="i-simple-icons-linkedin"
              color="primary"
              variant="ghost"
              size="sm"
              to="https://linkedin.com/in/otakuhuang"
              target="_blank"
              aria-label="LinkedIn"
            />
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-200 mt-8 pt-8 text-center">
        <p class="text-gray-600 text-sm">
          © {{ new Date().getFullYear() }} Otakuhuang. 保留所有权利。
        </p>
      </div>
    </div>
  </footer>
</template> 