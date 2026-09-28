import { createGetUrl } from 'fumadocs-core/source';
import { i18n } from './i18n';

export const appName = {
  en: 'ydesign',
  cn: 'ydesign',
} as const;

export function getAppName(locale: string) {
  return locale === 'cn' ? appName.cn : appName.en;
}

export function getAppDescription(locale: string) {
  return locale === 'cn'
    ? '用 HTML、JSX 写模板，或在可视化编辑器里改，再通过 API 渲染分享海报、商品封面和营销图。'
    : 'Design templates in HTML or JSX, or in the visual editor — then render posters, covers, and ads through the API.';
}
export const docsRoute = '/docs';
export const blogRoute = '/blog';
export const showcaseRoute = '/showcase';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// 创建 GitHub 仓库后改成你的用户名和仓库名，文档页「在 GitHub 上查看」会用到。
export const gitConfig = {
  user: 'liaojunhao',
  repo: 'ydesign-docs',
  branch: 'master',
};

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const locale = page.locale ?? i18n.defaultLanguage;
  const segments = [locale, ...page.slugs, 'content.md'];

  return { segments, url: `${basePath}${getContentUrl(segments)}` };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const locale = page.locale ?? i18n.defaultLanguage;
  const segments = [locale, ...page.slugs, 'image.png'];

  return { segments, url: `${basePath}${getImageUrl(segments)}` };
}
