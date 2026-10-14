import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { DocsNavMenu } from '@/components/docs-nav-menu';
import { getAppName, gitConfig } from './shared';

export function baseOptions(locale: string): BaseLayoutProps {
  const isCn = locale === 'cn';

  return {
    nav: {
      title: (
        <>
          <img
            src="/favicon.svg"
            alt=""
            width={20}
            height={20}
            className="size-5 dark:invert"
          />
          {getAppName(locale)}
        </>
      ),
      url: `/${locale}`,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        type: 'custom',
        children: <DocsNavMenu locale={locale} />,
      },
      {
        type: 'main',
        text: isCn ? '定价' : 'Pricing',
        url: `/${locale}/#pricing`,
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
