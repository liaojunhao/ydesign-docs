import {
  Globe,
  SlidersVertical,
  Type,
  Zap,
  type LucideIcon,
} from 'lucide-react';

const icons = {
  sliders: SlidersVertical,
  type: Type,
  zap: Zap,
  globe: Globe,
} satisfies Record<string, LucideIcon>;

type Feature = {
  icon: keyof typeof icons;
  title: string;
  description: string;
};

export function FeaturesSection({
  copy,
}: {
  copy: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly Feature[];
  };
}) {
  return (
    <section className="mt-16 py-16 md:mt-20 md:py-20">
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs font-medium tracking-widest text-[#5645d4] dark:text-[#c4b6ff]">
          {copy.eyebrow}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
          {copy.title}
        </h2>
        <p className="text-fd-muted-foreground mx-auto mt-4 max-w-2xl text-base leading-relaxed text-pretty">
          {copy.description}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {copy.items.map((item) => {
          const Icon = icons[item.icon];
          return (
            <article
              key={item.title}
              className="border-fd-border bg-fd-card rounded-2xl border p-6"
            >
              <div className="bg-fd-muted mb-4 flex size-9 items-center justify-center rounded-lg text-[#5645d4] dark:text-[#c4b6ff]">
                <Icon className="size-[17px]" />
              </div>
              <h3 className="mb-2 text-base font-semibold">{item.title}</h3>
              <p className="text-fd-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
