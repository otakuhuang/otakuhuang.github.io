import type { BlogContent, Author, BlogStats } from '~/types/blog';

// 静态作者信息
const author: Author = {
  name: 'otakuhuang',
  avatar: '/images/avatar.jpg',
  bio: '前端开发工程师，热爱技术分享，专注于 Vue.js、TypeScript 和现代前端技术栈。',
  social: {
    github: 'https://github.com/otakuhuang',
    twitter: 'https://twitter.com/otakuhuang',
  },
};

// 静态统计数据
const stats: BlogStats = {
  totalContents: 4,
  totalViews: 1234,
  totalLikes: 89,
};

// 模拟从 markdown 文件读取的内容数据
const contents: BlogContent[] = [
  {
    id: '1',
    title: '开始我的内容创作之旅',
    excerpt: '欢迎来到我的个人内容站！这里将分享我在前端开发、TypeScript、Vue.js 等领域的学习心得和技术见解。',
    content: '这是我的第一篇内容文章...',
    author: 'otakuhuang',
    publishedAt: '2024-01-15',
    tags: ['前端', 'Vue.js', 'TypeScript'],
    readTime: 5,
    featured: true,
    coverImage: '/images/blog-1.jpg',
  },
  {
    id: '2',
    title: 'Nuxt 3 与 TypeScript 的最佳实践',
    excerpt: '探讨在 Nuxt 3 项目中如何更好地使用 TypeScript，包括类型定义、组件开发和服务端渲染的优化。',
    content: 'Nuxt 3 提供了强大的 TypeScript 支持...',
    author: 'otakuhuang',
    publishedAt: '2024-01-10',
    tags: ['Nuxt', 'TypeScript', '最佳实践'],
    readTime: 8,
    featured: true,
  },
  {
    id: '3',
    title: '现代 CSS 布局技巧',
    excerpt: '分享一些实用的 CSS 布局技巧，包括 Grid、Flexbox 和现代 CSS 特性的应用。',
    content: '现代 CSS 提供了强大的布局能力...',
    author: 'otakuhuang',
    publishedAt: '2024-01-05',
    tags: ['CSS', '前端', '布局'],
    readTime: 6,
  },
  {
    id: '4',
    title: 'Vue 3 Composition API 深度解析',
    excerpt: '深入理解 Vue 3 Composition API 的设计理念和使用方法，以及在实际项目中的应用。',
    content: 'Composition API 是 Vue 3 的重要特性...',
    author: 'otakuhuang',
    publishedAt: '2024-01-01',
    tags: ['Vue.js', 'Composition API', '前端'],
    readTime: 10,
  },
];

// 内容服务 - 直接返回数据，避免函数序列化问题
export const useContent = () => {
  const featuredContents = contents.filter(content => content.featured);
  const recentContents = contents.slice(0, 3);
  const allContents = contents;

  return {
    featuredContents,
    recentContents,
    allContents,
    author,
    stats,
  };
}; 