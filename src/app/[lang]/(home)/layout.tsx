import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { getAppName } from '@/lib/shared';
import type { ReactNode } from 'react';
import { HomeFooter } from './home-footer';
import { homeCopy } from './home-copy';

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  const base = baseOptions(lang);

  const copy = lang === 'cn' ? homeCopy.cn : homeCopy.en;

  return (
    <HomeLayout
      {...base}
      nav={{
        ...base.nav,
        transparentMode: 'top',
      }}
    >
      {children}
      <HomeFooter lang={lang} brand={getAppName(lang)} copy={copy.footer} />
    </HomeLayout>
  );
}
