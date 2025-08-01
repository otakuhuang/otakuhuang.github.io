export interface BlogContent {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  tags: string[]
  readTime: number
  featured?: boolean
  coverImage?: string
}

export interface Author {
  name: string
  avatar: string
  bio: string
  social: {
    github?: string
    twitter?: string
    linkedin?: string
  }
}

export interface BlogStats {
  totalContents: number
  totalViews: number
  totalLikes: number
} 