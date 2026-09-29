import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SilkField } from './silk-field';

export function ClosingSection({
  copy,
  href,
  docsHref,
}: {
  copy: {
    title: string;
    description: string;
    cta: string;
    docsCta: string;
  };
  href: string;
  docsHref: string;
}) {
  return (
    <section className="mt-6 md:my-12">
      <div className="relative isolate overflow-hidden rounded-2xl border border-[#5645d4]/20 bg-[#f4f1ff] py-14 md:py-16 dark:border-white/12 dark:bg-[#161226]">
        <SilkField className="pointer-events-none absolute inset-0 block size-full" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(86,69,212,0.16)_1.2px,transparent_1.8px)] [mask-image:radial-gradient(ellipse_45%_55%_at_50%_70%,black,transparent)] bg-size-[24px_24px] dark:bg-[radial-gradient(circle,rgba(196,182,255,0.12)_1.2px,transparent_1.8px)]"
        />
        <div className="relative z-[1] flex flex-col items-center px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#24183f] md:text-4xl dark:text-white">
            {copy.title}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 whitespace-pre-line text-[#24183f] dark:text-[#f3eefe]">
            {copy.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={href}
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#5645d4] pr-3.5 pl-4 text-sm leading-none font-medium text-white transition-[opacity,transform] hover:opacity-85 active:scale-[0.98] dark:bg-white dark:text-[#2a2158]"
            >
              {copy.cta}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={docsHref}
              className="inline-flex h-10 items-center rounded-xl border border-[#24183f]/15 bg-white/70 px-4 text-sm leading-none font-medium text-[#24183f] transition-colors hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/16"
            >
              {copy.docsCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
