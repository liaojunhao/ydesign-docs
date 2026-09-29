'use client';

import { useId, useLayoutEffect, useRef, useState } from 'react';

type FaqItem = {
  question: string;
  answer: string;
  link: string;
};

export function FaqSection({
  copy,
}: {
  copy: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly FaqItem[];
  };
}) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className="border-fd-border border-t py-12 md:py-14">
      <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="mb-3 text-xs font-medium tracking-widest text-[#5645d4] dark:text-[#c4b6ff]">
            {copy.eyebrow}
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {copy.title}
          </h2>
          <p className="text-fd-muted-foreground mt-3 max-w-sm text-sm leading-relaxed">
            {copy.description}
          </p>
        </div>
        <div className="border-fd-border divide-fd-border divide-y border-y">
          {copy.items.map((item, index) => (
            <FaqRow
              key={item.question}
              item={item}
              open={open === index}
              baseId={baseId}
              index={index}
              onToggle={() => setOpen(open === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqRow({
  item,
  open,
  baseId,
  index,
  onToggle,
}: {
  item: FaqItem;
  open: boolean;
  baseId: string;
  index: number;
  onToggle: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const skipAnimation = useRef(true);
  const [height, setHeight] = useState<number | 'auto'>(open ? 'auto' : 0);
  const panelId = `${baseId}-answer-${index}`;
  const buttonId = `${baseId}-question-${index}`;

  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    if (skipAnimation.current) {
      skipAnimation.current = false;
      return;
    }

    if (open) {
      setHeight(panel.scrollHeight);
      return;
    }

    setHeight(panel.getBoundingClientRect().height);
    let nested = 0;
    const frame = requestAnimationFrame(() => {
      nested = requestAnimationFrame(() => setHeight(0));
    });
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(nested);
    };
  }, [open]);

  return (
    <div>
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left font-semibold"
        >
          {item.question}
          <span
            aria-hidden
            className={`bg-fd-muted flex size-7 shrink-0 items-center justify-center rounded-full text-lg font-normal transition-transform duration-300 ease-out motion-reduce:transition-none ${
              open ? 'rotate-45' : ''
            }`}
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        ref={panelRef}
        role="region"
        aria-labelledby={buttonId}
        inert={!open}
        style={{ height }}
        onTransitionEnd={(event) => {
          if (event.propertyName === 'height' && open) setHeight('auto');
        }}
        className={`overflow-hidden transition-[height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-fd-muted-foreground max-w-2xl pb-5 text-sm leading-6">
          {item.answer}
          {item.link ? (
            <a
              className="break-all underline underline-offset-2"
              href={item.link}
              rel="noreferrer"
              target="_blank"
            >
              {item.link}
            </a>
          ) : null}
        </p>
      </div>
    </div>
  );
}
