import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import type { ReactNode } from 'react';

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  const base = baseOptions(lang);

  return (
    <HomeLayout
      {...base}
      nav={{
        ...base.nav,
        transparentMode: 'top',
      }}
    >
      {children}
    </HomeLayout>
  );
}
