import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string().default('Guide'),
    readingTime: z.string().default('7 min'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    related: z.array(z.string()).default([])
  })
});

const comparatifs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/comparatifs' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.string().default('Comparatif'),
    readingTime: z.string().default('10 min'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    methodology: z.string().optional()
  })
});

export const collections = { guides, comparatifs };
