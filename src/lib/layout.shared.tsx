import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { getAppName, gitConfig } from './shared';

export function baseOptions(locale: string): BaseLayoutProps {
  const isCn = locale === 'cn';

  return {
    nav: {
      title: (
        <>
          <img src="/favicon.svg" alt="" width={20} height={20} className="size-5" />
          {getAppName(locale)}
        </>
      ),
      url: `/${locale}`,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        type: 'main',
        text: isCn ? '文档' : 'Docs',
        url: `/${locale}/docs`,
      },
      {
        type: 'main',
        text: isCn ? '博客' : 'Blog',
        url: `/${locale}/blog`,
      },
      {
        type: 'main',
        text: isCn ? '场景' : 'Showcase',
        url: `/${locale}/showcase`,
      },
    ],
  };
}
