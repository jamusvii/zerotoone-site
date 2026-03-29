import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(), // YYYY-MM-DD
    author: z.enum(['Jay', 'Fairy', 'Mika', 'Sora', 'Hana', 'Yuna', 'Kai']),
    tags: z.array(z.string()).default([]),
    type: z.enum(['signal', 'kill', 'pivot', 'build', 'insight']).default('build'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
