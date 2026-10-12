import type { Metadata } from 'next';
import { EditorIndexRedirect } from './redirect';

function overviewHref(lang: string) {
  return `/${lang}/docs/editor/overview/`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return {
    robots: { index: false, follow: true },
    alternates: { canonical: overviewHref(lang) },
  };
}

export default async function EditorIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return <EditorIndexRedirect href={overviewHref(lang)} />;
}
