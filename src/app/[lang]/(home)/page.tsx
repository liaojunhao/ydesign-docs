import Link from 'next/link';
import { ArrowRight, PenTool } from 'lucide-react';
import { i18n } from '@/lib/i18n';
import { gitConfig } from '@/lib/shared';
import { HeroVisual } from './hero-visual';
import { homeCopy } from './home-copy';
import { ScenariosSection } from './scenarios-section';
import { ClosingSection } from './closing-section';
import { FaqSection } from './faq-section';
import { FeaturesSection } from './features-section';
import { PricingSection } from './pricing-section';
import { MethodsSection } from './methods-section';
import { TemplatesSection } from './templates-section';
import { HashScroll } from './hash-scroll';

export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  const copy = lang === 'cn' ? homeCopy.cn : homeCopy.en;

  return (
    <main className="mx-auto flex w-full max-w-(--fd-layout-width) flex-1 flex-col px-4 pt-12 pb-8 sm:pt-28 sm:pb-10">
      <HashScroll />
      <section className="grid gap-8 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-10">
        <div className="flex h-full flex-col">
          <p className="border-fd-border bg-fd-card text-fd-muted-foreground inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-sm">
            <PenTool className="size-3.5" />
            {copy.eyebrow}
          </p>
          <h1
            className={`mt-5 text-3xl font-semibold tracking-tight sm:leading-[1.2] ${
              lang === 'cn' ? 'sm:text-[2.5rem]' : 'sm:text-[2rem]'
            }`}
          >
            {copy.titleLines[0]}
            <br />
            {copy.titleLines[1]}
          </h1>
          <p className="text-fd-muted-foreground mt-4 text-sm leading-relaxed sm:text-base">
            {copy.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Link
              href={`/${lang}/docs`}
              className="bg-fd-primary text-fd-primary-foreground inline-flex h-11 items-center gap-2 rounded-lg px-4 text-sm font-medium whitespace-nowrap hover:opacity-90"
            >
              {copy.primaryCta}
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={`https://github.com/${gitConfig.user}/${gitConfig.repo}`}
              target="_blank"
              rel="noreferrer"
              className="bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent inline-flex h-11 items-center gap-2 rounded-lg border px-4 text-sm font-medium whitespace-nowrap"
            >
              <GithubMark className="size-4" />
              {copy.githubCta}
            </a>
          </div>
        </div>
        <HeroVisual key={lang} hero={copy.hero} />
      </section>

      <ScenariosSection copy={copy.scenarios} />
      <TemplatesSection copy={copy.templates} href={`/${lang}/showcase`} />
      <FeaturesSection copy={copy.features} />
      <MethodsSection
        copy={copy.methods}
        rawHref={`/${lang}/docs`}
        templateHref={`/${lang}/docs/variables`}
      />
      <PricingSection copy={copy.pricing} href={`/${lang}/docs`} />
      <FaqSection copy={copy.faq} />
      <ClosingSection
        copy={copy.closing}
        href={`/${lang}/docs`}
        docsHref={`/${lang}/docs`}
      />

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

function GithubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className} fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}
