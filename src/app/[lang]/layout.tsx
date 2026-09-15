import { Provider } from '@/components/provider';
import { i18n } from '@/lib/i18n';
import { getAppDescription, getAppName } from '@/lib/shared';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const name = getAppName(lang);

  return {
    title: {
      default: name,
      template: `%s | ${name}`,
    },
    description: getAppDescription(lang),
  };
}

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  if (!i18n.languages.includes(lang as (typeof i18n.languages)[number])) notFound();

  return <Provider locale={lang}>{children}</Provider>;
}

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}
