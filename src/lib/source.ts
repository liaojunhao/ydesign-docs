import { llms, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { blogRoute, docsRoute, showcaseRoute } from './shared';
import { defineDocs } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { i18n } from './i18n';
import { z } from 'zod';
import { openapi } from './openapi';

const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

function withI18nPages<T extends { files: Array<{ type: string; path: string }> }>(source: T): T {
  return {
    ...source,
    files: source.files.flatMap((file) => {
      if (file.type !== 'page') return [file];

      return i18n.languages.map((lang) => {
        if (lang === i18n.defaultLanguage) return file;
        const dot = file.path.lastIndexOf('.');
        const path =
          dot === -1
            ? `${file.path}.${lang}`
            : `${file.path.slice(0, dot)}.${lang}${file.path.slice(dot)}`;
        return { ...file, path };
      });
    }),
  } as T;
}

const openapiSource = withI18nPages(
  await openapi.staticSource({
    groupBy: 'tag',
    baseDir: '(image)/api',
  }),
);

export const source = loader(
  {
    docs: docs.toFumadocsSource(),
    openapi: openapiSource,
  },
  {
    baseUrl: docsRoute,
    i18n,
    plugins: [lucideIconsPlugin(), openapi.loaderPlugin()],
  },
);

export const docsLlms = llms(source, {
  renderPage: async (page) => {
    if (page.type === 'openapi') {
      const schema = page.data.getSchema().bundled;
      return `# ${page.data.title} (${page.url})

${JSON.stringify(schema, null, 2)}`;
    }

    return `# ${page.data.title} (${page.url})

${await page.data.getText('processed')}`;
  },
});

const blogPosts = defineDocs({
  dir: 'content/blog',
  docs: {
    schema: pageSchema.extend({
      author: z.string(),
      date: z.string().date().or(z.date()),
    }),
  },
  meta: {
    schema: metaSchema,
  },
});

export const blog = loader({
  baseUrl: blogRoute,
  source: blogPosts.toFumadocsSource(),
  i18n,
  plugins: [],
});

const showcasePages = defineDocs({
  dir: 'content/showcase',
  docs: {
    schema: pageSchema.extend({
      preview: z.enum(['share', 'product', 'article', 'marketing', 'editor']),
      product: z.enum(['image', 'editor', 'both']),
      order: z.number().optional(),
    }),
  },
  meta: {
    schema: metaSchema,
  },
});

export const showcase = loader({
  baseUrl: showcaseRoute,
  source: showcasePages.toFumadocsSource(),
  i18n,
  plugins: [],
});
