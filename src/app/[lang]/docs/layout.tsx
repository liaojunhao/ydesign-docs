import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
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
  const options = baseOptions(lang);
  const links = options.links?.filter(
    (item) => !('url' in item && item.url === `/${lang}/docs`),
  );

  return (
    <DocsLayout tree={source.getPageTree(lang)} {...options} links={links}>
      {children}
    </DocsLayout>
  );
}
