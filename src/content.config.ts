import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const chansons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/chansons' }),
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    key: z.string(),
    capo: z.number().default(0),
    tempo: z.enum(['lent', 'moyen', 'rapide']).default('moyen'),
    difficulty: z.enum(['facile', 'moyen', 'avancé']).default('moyen'),
    order: z.number(),
    pdf: z.string().optional(),
  }),
});

export const collections = { chansons };
