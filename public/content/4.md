---
title: "Vue 3 Composition API 深度解析"
excerpt: "深入理解 Vue 3 Composition API 的设计理念和使用方法，以及在实际项目中的应用。"
author: "otakuhuang"
publishedAt: "2024-01-01"
tags: ["Vue.js", "Composition API", "前端"]
readTime: 10
---

# Vue 3 Composition API 深度解析

Vue 3 的 Composition API 是一个革命性的特性，它改变了我们编写 Vue 组件的方式。本文将深入探讨其设计理念和实际应用。

## 为什么需要 Composition API？

### Options API 的局限性

传统的 Options API 在处理复杂组件时存在以下问题：

1. **逻辑分散**: 相关的逻辑代码分散在不同的选项中
2. **代码复用困难**: 难以在组件间共享逻辑
3. **类型推断有限**: TypeScript 支持不够完善

### Composition API 的优势

```vue
<script setup>
import { ref, computed, onMounted } from 'vue'

// 所有相关逻辑都在一个地方
const count = ref(0)
const doubleCount = computed(() => count.value * 2)

const increment = () => count.value++

onMounted(() => {
  console.log('Component mounted')
})
</script>
```

## 核心概念

### 1. 响应式引用 (ref)

```vue
<script setup>
import { ref } from 'vue'

// 基本类型
const count = ref(0)
const name = ref('Vue')

// 对象类型
const user = ref({
  name: 'John',
  age: 30
})

// 数组类型
const items = ref(['item1', 'item2', 'item3'])
</script>
```

### 2. 计算属性 (computed)

```vue
<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

// 只读计算属性
const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})

// 可写计算属性
const fullNameWritable = computed({
  get() {
    return `${firstName.value} ${lastName.value}`
  },
  set(value) {
    const names = value.split(' ')
    firstName.value = names[0]
    lastName.value = names[1] || ''
  }
})
</script>
```

### 3. 监听器 (watch)

```vue
<script setup>
import { ref, watch, watchEffect } from 'vue'

const count = ref(0)
const name = ref('Vue')

// 监听单个响应式引用
watch(count, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`)
})

// 监听多个响应式引用
watch([count, name], ([newCount, newName], [oldCount, oldName]) => {
  console.log('Multiple values changed')
})

// 立即执行的监听器
watchEffect(() => {
  console.log(`Count is ${count.value}, Name is ${name.value}`)
})
</script>
```

## 生命周期钩子

```vue
<script setup>
import { 
  onMounted, 
  onUnmounted, 
  onUpdated, 
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate
} from 'vue'

onBeforeMount(() => {
  console.log('Before mount')
})

onMounted(() => {
  console.log('Component mounted')
})

onBeforeUpdate(() => {
  console.log('Before update')
})

onUpdated(() => {
  console.log('Component updated')
})

onBeforeUnmount(() => {
  console.log('Before unmount')
})

onUnmounted(() => {
  console.log('Component unmounted')
})
</script>
```

## 组合式函数 (Composables)

### 1. 基础组合式函数

```typescript
// composables/useCounter.ts
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue
  
  const doubleCount = computed(() => count.value * 2)
  
  return {
    count: readonly(count),
    doubleCount,
    increment,
    decrement,
    reset
  }
}
```

### 2. 异步组合式函数

```typescript
// composables/useApi.ts
import { ref, computed } from 'vue'

export function useApi<T>(url: string) {
  const data = ref<T | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  
  const fetchData = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      data.value = await response.json()
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }
  
  const hasData = computed(() => data.value !== null)
  
  return {
    data: readonly(data),
    loading: readonly(loading),
    error: readonly(error),
    hasData,
    fetchData
  }
}
```

### 3. 本地存储组合式函数

```typescript
// composables/useLocalStorage.ts
import { ref, watch } from 'vue'

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const stored = localStorage.getItem(key)
  const value = ref<T>(stored ? JSON.parse(stored) : defaultValue)
  
  watch(value, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue))
  }, { deep: true })
  
  return value
}
```

## 实际应用示例

### 1. 表单处理

```vue
<script setup>
import { ref, computed } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref({})

const isValid = computed(() => {
  return form.value.name && form.value.email && form.value.message
})

const validateForm = () => {
  errors.value = {}
  
  if (!form.value.name) {
    errors.value.name = 'Name is required'
  }
  
  if (!form.value.email) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Invalid email format'
  }
  
  if (!form.value.message) {
    errors.value.message = 'Message is required'
  }
  
  return Object.keys(errors.value).length === 0
}

const submitForm = () => {
  if (validateForm()) {
    // 提交表单
    console.log('Form submitted:', form.value)
  }
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <div>
      <input v-model="form.name" placeholder="Name" />
      <span v-if="errors.name" class="error">{{ errors.name }}</span>
    </div>
    
    <div>
      <input v-model="form.email" type="email" placeholder="Email" />
      <span v-if="errors.email" class="error">{{ errors.email }}</span>
    </div>
    
    <div>
      <textarea v-model="form.message" placeholder="Message"></textarea>
      <span v-if="errors.message" class="error">{{ errors.message }}</span>
    </div>
    
    <button type="submit" :disabled="!isValid">Submit</button>
  </form>
</template>
```

### 2. 无限滚动

```vue
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const items = ref([])
const loading = ref(false)
const page = ref(1)

const loadMore = async () => {
  if (loading.value) return
  
  loading.value = true
  try {
    const response = await fetch(`/api/items?page=${page.value}`)
    const newItems = await response.json()
    items.value.push(...newItems)
    page.value++
  } catch (error) {
    console.error('Failed to load items:', error)
  } finally {
    loading.value = false
  }
}

const handleScroll = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement
  if (scrollTop + clientHeight >= scrollHeight - 100) {
    loadMore()
  }
}

onMounted(() => {
  loadMore()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
```

## 性能优化

### 1. 使用 shallowRef

```vue
<script setup>
import { shallowRef } from 'vue'

// 对于大型对象，使用 shallowRef 避免深度响应式
const largeObject = shallowRef({
  // 大量数据
})
</script>
```

### 2. 使用 markRaw

```vue
<script setup>
import { ref, markRaw } from 'vue'

// 标记不需要响应式的对象
const staticData = ref(markRaw({
  // 静态数据
}))
</script>
```

### 3. 使用 toRef 和 toRefs

```vue
<script setup>
import { toRef, toRefs } from 'vue'

const props = defineProps<{
  title: string
  count: number
}>()

// 创建单个 ref
const titleRef = toRef(props, 'title')

// 创建多个 ref
const { title, count } = toRefs(props)
</script>
```

## 与 Options API 的对比

### Options API 写法

```vue
<script>
export default {
  data() {
    return {
      count: 0,
      name: 'Vue'
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    console.log('Component mounted')
  }
}
</script>
```

### Composition API 写法

```vue
<script setup>
import { ref, computed, onMounted } from 'vue'

const count = ref(0)
const name = ref('Vue')

const doubleCount = computed(() => count.value * 2)

const increment = () => count.value++

onMounted(() => {
  console.log('Component mounted')
})
</script>
```

## 最佳实践

### 1. 命名约定

```vue
<script setup>
// 使用描述性的变量名
const userCount = ref(0)
const isLoading = ref(false)
const errorMessage = ref('')

// 使用动词前缀的函数名
const fetchUsers = async () => { /* ... */ }
const handleSubmit = () => { /* ... */ }
const validateForm = () => { /* ... */ }
</script>
```

### 2. 组合式函数的组织

```typescript
// 将相关逻辑组织在一起
export function useUser() {
  const user = ref(null)
  const loading = ref(false)
  
  const fetchUser = async (id: string) => {
    loading.value = true
    try {
      user.value = await api.getUser(id)
    } finally {
      loading.value = false
    }
  }
  
  return {
    user: readonly(user),
    loading: readonly(loading),
    fetchUser
  }
}
```

### 3. 类型安全

```vue
<script setup lang="ts">
interface User {
  id: number
  name: string
  email: string
}

const user = ref<User | null>(null)
const users = ref<User[]>([])

const fetchUser = async (id: number): Promise<User> => {
  const response = await fetch(`/api/users/${id}`)
  return response.json()
}
</script>
```

## 总结

Composition API 为 Vue 3 带来了：

- **更好的逻辑复用**: 通过组合式函数
- **更强的类型支持**: 完整的 TypeScript 支持
- **更清晰的代码组织**: 相关逻辑集中管理
- **更好的性能**: 更精确的响应式追踪

掌握 Composition API，你将能够编写出更加优雅和可维护的 Vue 组件。

---

*最后更新时间: 2024-01-01* 