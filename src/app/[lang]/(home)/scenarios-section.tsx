'use client';

import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

type Scenario = {
  title: string;
  description: string;
  image: string;
};

export function ScenariosSection({
  copy,
}: {
  copy: {
    eyebrow: string;
    title: string;
    description: string;
    placeholder: string;
    items: readonly Scenario[];
  };
}) {
  const [active, setActive] = useState(0);
  const current = copy.items[active];

  return (
    <section className="mt-20 pt-16 sm:mt-28 sm:pt-20">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-xs font-medium tracking-widest text-[#5645d4]">
            {copy.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
            {copy.title}
          </h2>
        </div>
        <p className="text-fd-muted-foreground max-w-md text-sm leading-relaxed">
          {copy.description}
        </p>
      </div>
      <div className="grid items-stretch gap-6 lg:grid-cols-[280px_1fr] lg:gap-10">
        <div
          className="flex gap-3 overflow-x-auto lg:flex-col lg:gap-2"
          role="tablist"
        >
          {copy.items.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`shrink-0 rounded-xl border px-4 py-3 text-left transition-all lg:px-5 lg:py-4 ${
                  selected
                    ? 'border-[#5645d4] bg-[#e6e0f5]/45 shadow-sm'
                    : 'border-transparent hover:bg-[#f6f5f4]'
                }`}
                onClick={() => setActive(index)}
              >
                <span className="mb-1 flex items-center gap-2">
                  <span
                    className={`font-mono text-xs ${
                      selected
                        ? 'text-[#5645d4]'
                        : 'text-fd-muted-foreground/60'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      selected ? 'text-fd-foreground' : 'text-fd-foreground/65'
                    }`}
                  >
                    {item.title}
                  </span>
                </span>
                <span
                  className={`hidden text-xs leading-relaxed lg:block ${
                    selected
                      ? 'text-fd-foreground/75'
                      : 'text-fd-muted-foreground'
                  }`}
                >
                  {item.description}
                </span>
              </button>
            );
          })}
        </div>
        <div className="flex h-full min-w-0 flex-col" role="tabpanel">
          <div className="flex min-h-72 flex-1 items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-[#f5f1e8]">
            {current.image ? (
              <img
                alt={current.title}
                className="max-h-full w-full object-contain"
                src={current.image}
              />
            ) : (
              <div className="text-fd-muted-foreground flex flex-col items-center gap-3 px-6 text-center">
                <ImageIcon className="size-8" />
                <p className="text-sm font-medium">{copy.placeholder}</p>
              </div>
            )}
          </div>
          <p className="text-fd-muted-foreground mt-3 shrink-0 text-xs leading-relaxed">
            {current.title} · {current.description}
          </p>
        </div>
      </div>
    </section>
  );
}
