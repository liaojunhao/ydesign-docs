import Link from 'next/link';
import { Image, LayoutGrid, Newspaper, PenTool } from 'lucide-react';
import { i18n } from '@/lib/i18n';
import { homeCopy } from './home-copy';

export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  const copy = lang === 'cn' ? homeCopy.cn : homeCopy.en;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-16 sm:py-24">
      <section className="mx-auto max-w-2xl text-center">
        {/* <p className="mb-3 text-sm font-medium text-fd-primary">{copy.eyebrow}</p> */}
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{copy.title}</h1>
        <p className="mt-4 text-lg text-fd-muted-foreground">{copy.description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`/${lang}/docs`}
            className="inline-flex h-11 items-center rounded-full bg-fd-primary px-5 text-sm font-medium text-fd-primary-foreground hover:opacity-90"
          >
            {copy.primaryCta}
          </Link>
          <Link
            href={`/${lang}/docs/editor`}
            className="inline-flex h-11 items-center rounded-full border bg-fd-secondary px-5 text-sm font-medium text-fd-secondary-foreground hover:bg-fd-accent"
          >
            {copy.secondaryCta}
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link
          href={`/${lang}/docs`}
          className="rounded-2xl border bg-fd-card p-6 transition-colors hover:bg-fd-accent/40"
        >
          <Image className="mb-4 size-5 text-fd-primary" />
          <h2 className="font-semibold">{copy.cards.image.title}</h2>
          <p className="mt-2 text-sm text-fd-muted-foreground">{copy.cards.image.description}</p>
        </Link>
        <Link
          href={`/${lang}/docs/editor`}
          className="rounded-2xl border bg-fd-card p-6 transition-colors hover:bg-fd-accent/40"
        >
          <PenTool className="mb-4 size-5 text-fd-primary" />
          <h2 className="font-semibold">{copy.cards.editor.title}</h2>
          <p className="mt-2 text-sm text-fd-muted-foreground">{copy.cards.editor.description}</p>
        </Link>
        <Link
          href={`/${lang}/showcase`}
          className="rounded-2xl border bg-fd-card p-6 transition-colors hover:bg-fd-accent/40"
        >
          <LayoutGrid className="mb-4 size-5 text-fd-primary" />
          <h2 className="font-semibold">{copy.cards.showcase.title}</h2>
          <p className="mt-2 text-sm text-fd-muted-foreground">{copy.cards.showcase.description}</p>
        </Link>
        <Link
          href={`/${lang}/blog`}
          className="rounded-2xl border bg-fd-card p-6 transition-colors hover:bg-fd-accent/40"
        >
          <Newspaper className="mb-4 size-5 text-fd-primary" />
          <h2 className="font-semibold">{copy.cards.blog.title}</h2>
          <p className="mt-2 text-sm text-fd-muted-foreground">{copy.cards.blog.description}</p>
        </Link>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}
