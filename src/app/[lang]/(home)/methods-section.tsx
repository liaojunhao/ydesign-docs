import Link from 'next/link';
import {
  ArrowRight,
  Braces,
  CodeXml,
  Image as ImageIcon,
  LayoutTemplate,
  type LucideIcon,
} from 'lucide-react';

const stepIcons: LucideIcon[] = [CodeXml, Braces, ArrowRight, ImageIcon];

type Step = {
  title: string;
  description: string;
};

export function MethodsSection({
  copy,
  templateHref,
  rawHref,
}: {
  copy: {
    eyebrow: string;
    title: string;
    template: {
      label: string;
      title: string;
      description: string;
      steps: readonly Step[];
    };
    raw: {
      label: string;
      title: string;
      description: string;
      request: string;
      body: string;
    };
  };
  templateHref: string;
  rawHref: string;
}) {
  return (
    <section className="relative left-1/2 mt-8 w-screen -translate-x-1/2 border-t border-white/10 bg-[#171f18] py-16 text-white sm:mt-12 md:py-20">
      <div className="mx-auto w-full max-w-(--fd-layout-width) px-4">
        <div className="mb-10">
          <p className="mb-3 text-xs font-medium tracking-widest text-[#d8f34a]">
            {copy.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
            {copy.title}
          </h2>
        </div>
        <div className="space-y-5">
          <Link
            href={templateHref}
            className="block overflow-hidden rounded-2xl border border-white/15 bg-white/4 transition-colors hover:border-white/30"
          >
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="p-7 md:p-9">
                <span className="mb-5 flex size-10 items-center justify-center rounded-xl bg-[#ff76bd] text-[#321126]">
                  <LayoutTemplate className="size-[19px]" />
                </span>
                <p className="mb-2 font-mono text-xs text-[#ff76bd]">
                  {copy.template.label}
                </p>
                <h3 className="text-xl font-semibold">{copy.template.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {copy.template.description}
                </p>
              </div>
              <div className="flex items-center border-t border-white/15 bg-black/20 p-5 lg:border-t-0 lg:border-l">
                <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
                  {copy.template.steps.map((step, index) => {
                    const Icon = stepIcons[index] ?? CodeXml;
                    return (
                      <div
                        key={step.title}
                        className="relative rounded-xl border border-white/10 bg-white/4 p-4"
                      >
                        <span className="mb-7 flex size-8 items-center justify-center rounded-lg bg-white/10">
                          <Icon className="size-[15px]" />
                        </span>
                        <p className="text-sm font-semibold">{step.title}</p>
                        <p className="mt-2 text-[11px] leading-5 text-white/45">
                          {step.description}
                        </p>
                        <span className="absolute top-3 right-3 font-mono text-[10px] text-white/30">
                          {index + 1}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={rawHref}
            className="block overflow-hidden rounded-2xl border border-white/15 bg-white/4 transition-colors hover:border-white/30"
          >
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="p-7 md:p-9">
                <span className="mb-5 flex size-10 items-center justify-center rounded-xl bg-[#d8f34a] text-[#17210d]">
                  <CodeXml className="size-[19px]" />
                </span>
                <p className="mb-2 font-mono text-xs text-[#d8f34a]">
                  {copy.raw.label}
                </p>
                <h3 className="text-xl font-semibold">{copy.raw.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {copy.raw.description}
                </p>
              </div>
              <div className="border-t border-white/15 bg-black/20 p-5 lg:border-t-0 lg:border-l">
                <pre className="overflow-x-auto rounded-xl bg-black/30 p-5 font-mono text-xs leading-6 text-white/70">
                  <code>
                    <span className="text-[#d8f34a]">
                      {copy.raw.request.split(' ')[0]}
                    </span>{' '}
                    {copy.raw.request.split(' ').slice(1).join(' ')}
                    {'\n\n'}
                    {copy.raw.body}
                  </code>
                </pre>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
