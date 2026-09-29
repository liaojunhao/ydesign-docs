import Link from 'next/link';
import { ArrowRight, ImageIcon } from 'lucide-react';

type TemplateCard = {
  category: string;
  title: string;
  description: string;
  size: string;
  image: string;
};

export function TemplatesSection({
  copy,
  href,
}: {
  copy: {
    eyebrow: string;
    title: string;
    description: string;
    more: string;
    items: readonly TemplateCard[];
  };
  href: string;
}) {
  return (
    <section className="relative left-1/2 mt-20 w-screen -translate-x-1/2 bg-[#f5f1e8] py-16 text-[#1a1a1a] sm:mt-28 md:py-20 dark:bg-[#241f1b] dark:text-[#f4efe6]">
      <div className="mx-auto w-full max-w-(--fd-layout-width) px-4">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-medium tracking-widest text-[#5645d4] dark:text-[#c4b6ff]">
            {copy.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {copy.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#5e584f] dark:text-[#c8c0b4]">
            {copy.description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-black/10 bg-white transition-colors hover:border-black/25 dark:border-white/10 dark:bg-[#1c1916] dark:hover:border-white/25"
            >
              <Link href={href} title={item.title} className="block">
                <div className="relative aspect-video overflow-hidden bg-[#e8e8e8] dark:bg-[#3a3632]">
                  {item.image ? (
                    <img
                      alt={item.title}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      height={360}
                      src={item.image}
                      width={640}
                    />
                  ) : (
                    <div className="flex size-full flex-col items-center justify-center gap-2 text-[#8a847c] dark:text-[#b7b0a6]">
                      <ImageIcon className="size-6" />
                    </div>
                  )}
                  <span className="absolute right-2 bottom-2 rounded bg-black/70 px-1.5 py-0.5 font-mono text-[10px] text-white tabular-nums">
                    {item.size}
                  </span>
                </div>
                <div className="p-5">
                  {item.category ? (
                    <p className="mb-2 text-xs font-medium tracking-widest text-[#5645d4] dark:text-[#c4b6ff]">
                      {item.category}
                    </p>
                  ) : null}
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#5e584f] dark:text-[#c8c0b4]">
                    {item.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href={href}
            className="inline-flex items-center gap-2 rounded-lg border border-black/20 bg-white px-5 py-3 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-[#d8f34a] dark:border-white/15 dark:bg-[#1c1916] dark:text-[#f4efe6] dark:hover:bg-[#d8f34a] dark:hover:text-[#1a1a1a]"
          >
            {copy.more}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
