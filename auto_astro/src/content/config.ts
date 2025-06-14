import { defineCollection, z } from "astro:content";

const newsCollection = defineCollection({
  type: 'content', //
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
  }),
});

export const collections = {
  news: newsCollection,
};

