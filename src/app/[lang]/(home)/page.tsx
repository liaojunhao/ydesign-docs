import Link from 'next/link';
import { ArrowRight, PenTool } from 'lucide-react';
import { i18n } from '@/lib/i18n';
import { HeroVisual } from './hero-visual';
import { homeCopy } from './home-copy';

export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  const copy = lang === 'cn' ? homeCopy.cn : homeCopy.en;

  return (
    <main className="mx-auto flex w-full max-w-(--fd-layout-width) flex-1 flex-col px-4 py-12 sm:py-28">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-10">
        <div className="flex flex-col">
          <p className="border-fd-border bg-fd-card text-fd-muted-foreground inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-sm">
            <PenTool className="size-3.5" />
            {copy.eyebrow}
          </p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-[2.5rem] sm:leading-[1.2]">
            {copy.titleLines[0]}
            <br />
            {copy.titleLines[1]}
          </h1>
          <p className="text-fd-muted-foreground mt-4 text-sm leading-relaxed sm:text-base">
            {copy.description}
          </p>
          <div className="flex flex-wrap items-center gap-3 lg:pt-8">
            <Link
              href={`/${lang}/docs`}
              className="bg-fd-primary text-fd-primary-foreground inline-flex h-11 items-center gap-2 rounded-lg px-5 text-sm font-medium hover:opacity-90"
            >
              {copy.primaryCta}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={`/${lang}/docs/editor`}
              className="bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent inline-flex h-11 items-center rounded-lg border px-5 text-sm font-medium"
            >
              {copy.secondaryCta}
            </Link>
          </div>
        </div>
        <HeroVisual key={lang} hero={copy.hero} />
      </section>

      {/* <section className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link
          href={`/${lang}/docs`}
          className="bg-fd-card hover:bg-fd-accent/40 rounded-2xl border p-6 transition-colors"
        >
          <Image className="text-fd-primary mb-4 size-5" />
          <h2 className="font-semibold">{copy.cards.image.title}</h2>
          <p className="text-fd-muted-foreground mt-2 text-sm">
            {copy.cards.image.description}
          </p>
        </Link>
        <Link
          href={`/${lang}/docs/editor`}
          className="bg-fd-card hover:bg-fd-accent/40 rounded-2xl border p-6 transition-colors"
        >
          <PenTool className="text-fd-primary mb-4 size-5" />
          <h2 className="font-semibold">{copy.cards.editor.title}</h2>
          <p className="text-fd-muted-foreground mt-2 text-sm">
            {copy.cards.editor.description}
          </p>
        </Link>
        <Link
          href={`/${lang}/showcase`}
          className="bg-fd-card hover:bg-fd-accent/40 rounded-2xl border p-6 transition-colors"
        >
          <LayoutGrid className="text-fd-primary mb-4 size-5" />
          <h2 className="font-semibold">{copy.cards.showcase.title}</h2>
          <p className="text-fd-muted-foreground mt-2 text-sm">
            {copy.cards.showcase.description}
          </p>
        </Link>
        <Link
          href={`/${lang}/blog`}
          className="bg-fd-card hover:bg-fd-accent/40 rounded-2xl border p-6 transition-colors"
        >
          <Newspaper className="text-fd-primary mb-4 size-5" />
          <h2 className="font-semibold">{copy.cards.blog.title}</h2>
          <p className="text-fd-muted-foreground mt-2 text-sm">
            {copy.cards.blog.description}
          </p>
        </Link>
      </section> */}
    </main>
  );
}

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}
