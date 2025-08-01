---
title: "现代 CSS 布局技巧"
excerpt: "分享一些实用的 CSS 布局技巧，包括 Grid、Flexbox 和现代 CSS 特性的应用。"
author: "otakuhuang"
publishedAt: "2024-01-05"
tags: ["CSS", "前端", "布局"]
readTime: 6
---

# 现代 CSS 布局技巧

现代 CSS 提供了强大的布局能力，本文将分享一些实用的布局技巧和最佳实践。

## CSS Grid 布局

### 1. 基础网格布局

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}
```

### 2. 响应式网格

```css
.grid-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .grid-layout {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-layout {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### 3. 网格区域布局

```css
.page-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

## Flexbox 布局

### 1. 垂直居中

```css
.centered {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
```

### 2. 响应式导航

```css
.nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-item {
  flex: 1;
  text-align: center;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
  }
}
```

### 3. 卡片布局

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px;
  min-width: 0;
}
```

## 现代 CSS 特性

### 1. CSS 变量

```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #64748b;
  --spacing-unit: 1rem;
  --border-radius: 0.5rem;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing-unit);
  border-radius: var(--border-radius);
}
```

### 2. CSS 计算函数

```css
.container {
  width: calc(100vw - 2rem);
  height: calc(100vh - 80px);
  margin: calc(var(--spacing-unit) / 2);
}
```

### 3. CSS 自定义属性

```css
.element {
  --custom-width: 200px;
  width: var(--custom-width);
}

.element:hover {
  --custom-width: 250px;
}
```

## 布局技巧

### 1. 粘性定位

```css
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### 2. 视口单位

```css
.full-height {
  height: 100vh;
  width: 100vw;
}

.half-height {
  height: 50vh;
}
```

### 3. 容器查询

```css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
```

## 性能优化

### 1. 硬件加速

```css
.optimized {
  transform: translateZ(0);
  will-change: transform;
}
```

### 2. 减少重排重绘

```css
.performance {
  transform: translateX(100px);
  opacity: 0.8;
  /* 避免改变 width, height, margin 等属性 */
}
```

## 实用工具类

### 1. 间距工具

```css
.m-0 { margin: 0; }
.m-1 { margin: 0.25rem; }
.m-2 { margin: 0.5rem; }
.m-4 { margin: 1rem; }

.p-0 { padding: 0; }
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-4 { padding: 1rem; }
```

### 2. 显示工具

```css
.d-none { display: none; }
.d-block { display: block; }
.d-flex { display: flex; }
.d-grid { display: grid; }
```

## 响应式设计

### 1. 移动优先

```css
/* 基础样式（移动端） */
.container {
  padding: 1rem;
}

/* 平板端 */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* 桌面端 */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

### 2. 断点管理

```css
/* 使用 CSS 变量管理断点 */
:root {
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
}
```

## 浏览器兼容性

### 1. 特性检测

```css
@supports (display: grid) {
  .modern-layout {
    display: grid;
  }
}

@supports not (display: grid) {
  .fallback-layout {
    display: flex;
  }
}
```

### 2. 渐进增强

```css
/* 基础样式 */
.button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
}

/* 现代浏览器增强 */
@supports (backdrop-filter: blur(10px)) {
  .button {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.1);
  }
}
```

## 总结

现代 CSS 布局技术让我们能够：

- 创建更灵活的布局
- 减少对 JavaScript 的依赖
- 提高页面性能
- 改善用户体验

掌握这些技巧，你将能够创建出更加优雅和高效的网页布局。

---

*最后更新时间: 2024-01-05* 