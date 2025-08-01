# otakuhuang 内容站

一个基于 **Nuxt 4**、**TypeScript** 和 **Nuxt UI** 的现代内容静态站点，支持内容模块化、组件化开发，所有内容以 Markdown 文件管理，适合个人博客、技术站点、知识库等场景。

## 🚀 技术栈

- **框架**：Nuxt 4 (Vue 3 + Vite)
- **语言**：TypeScript
- **UI**：Nuxt UI + Tailwind CSS
- **内容管理**：Markdown 文件（`public/content/`）
- **图标**：Heroicons、Simple Icons

## 📁 目录结构

```
app/
├── components/           # 组件目录
│   ├── content/          # 内容卡片组件
│   ├── home/             # 首页相关组件
│   └── layout/           # 布局组件（头部、页脚）
├── composables/          # 组合式内容服务
├── pages/                # 页面
│   ├── index.vue         # 首页
│   └── content/          # 内容相关页面
│       ├── index.vue     # 内容列表页
│       └── [id].vue      # 内容详情页
├── types/                # TypeScript 类型定义
│   └── blog.ts           # 内容类型、作者类型等
└── assets/               # 静态资源
    └── css/              # 样式文件
public/
├── content/              # Markdown 内容文件
│   ├── 1.md
│   ├── 2.md
│   └── ...
└── images/               # 图片资源
```

## ✨ 主要特性

- **内容静态化**：所有内容以 Markdown 文件存储，易于管理和扩展
- **模块化组件**：内容卡片、列表、详情、布局等全部组件化
- **TypeScript 全面支持**：类型安全，开发体验优秀
- **响应式设计**：适配移动端、平板和桌面端
- **SEO 优化**：自动注入 SEO 元信息
- **零网络请求**：所有内容本地静态化，无需后端
- **易于扩展**：可轻松添加新内容、新页面或新组件

## 📝 内容管理

- 所有内容存放于 `public/content/`，每篇内容为一个 Markdown 文件（带 Front Matter 元数据）
- 支持内容卡片、内容详情、内容导航（上一篇/下一篇）
- 支持内容标签、作者、封面、摘要、阅读时长等元信息

## 🧩 组件说明

- **ContentCard.vue**：内容卡片组件，列表页和精选区复用
- **FeaturedPosts.vue**：精选内容区
- **HeroSection.vue**：首页头图与统计区
- **AboutSection.vue**：作者介绍区
- **AppHeader.vue/AppFooter.vue**：全局头部与页脚

## 🛠️ 开发与扩展

### 安装依赖
```bash
npm install
# 或 yarn install
```

### 本地开发
```bash
npm run dev
# 或 yarn dev
```

### 构建静态站点
```bash
npm run build
# 或 yarn build
```

### 新增内容
1. 在 `public/content/` 下新建 Markdown 文件（如 `5.md`）
2. 填写 Front Matter 元数据和正文内容
3. 自动出现在内容列表和详情页

### 新增页面/组件
- 在 `app/pages/` 下添加新页面
- 在 `app/components/` 下添加新组件并按需导入

## 🌐 部署

构建后可将 `.output/public` 或 `dist/` 目录部署到任意静态托管平台，如：
- GitHub Pages
- Vercel
- Netlify
- 阿里云/腾讯云 OSS

## 📄 许可证

MIT License

---

**otakuhuang** - 热爱世界，共同成长
