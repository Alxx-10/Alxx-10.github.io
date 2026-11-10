import { defineCollection, z, type SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';
import { competenceKeys } from './data/competences';

// Champs communs aux fiches projets et missions de stage
const fiche = ({ image }: SchemaContext) =>
  z.object({
    code: z.string(),
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    cover: image(),
    competences: z.array(z.enum(competenceKeys)).min(1),
    gallery: z.array(image()).default([]),
  });

const projets = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projets' }),
  schema: (ctx) => fiche(ctx).extend({ group: z.enum(['ateliers', 'b1', 'e5']) }),
});

const stages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/stages' }),
  schema: (ctx) => fiche(ctx).extend({ group: z.enum(['annee1', 'annee2']) }),
});

export const collections = { projets, stages };
