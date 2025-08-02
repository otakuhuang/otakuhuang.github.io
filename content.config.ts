import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        excerpt: z.string(),
        coverImage: z.string(),
        tags: z.array(z.string()),
        publishedAt: z.date(),
        readTime: z.number(),
        author: z.string(),
        draft: z.boolean(),
        featured: z.boolean(),
      }),
    }),
  },
});