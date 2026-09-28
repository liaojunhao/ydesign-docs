import type { ReactNode } from 'react';
import {
  Image as ImageIcon,
  LayoutTemplate,
  Move,
  Plus,
  Type,
} from 'lucide-react';

type HeroCopy = {
  editor: string;
  imageAlt: string;
  tools: {
    template: string;
    text: string;
    image: string;
    position: string;
  };
  canvas: {
    badge: string;
    title: string;
    subtitle: string;
  };
};

export function HeroVisual({ hero }: { hero: HeroCopy }) {
  return (
    <div className="relative sm:pb-8">
      <div className="sm:w-[66%]">
        <EditorFrame hero={hero} />
      </div>
      <div className="relative z-10 mt-4 sm:absolute sm:top-12 sm:right-0 sm:mt-0 sm:w-[42%]">
        <div className="flex items-center justify-center rounded-2xl bg-[#f5f0e8] p-3 shadow-[0_22px_50px_-24px_rgba(0,0,0,0.4)] ring-1 ring-black/5 sm:p-4">
          <img
            alt={hero.imageAlt}
            className="aspect-5/3 w-full rounded-2xl object-cover shadow-xl"
            src="/images/hero_product_image.jpg"
          />
        </div>
      </div>
    </div>
  );
}

function EditorFrame({ hero }: { hero: HeroCopy }) {
  return (
    <div
      aria-hidden
      className="overflow-hidden rounded-2xl bg-[#f3f4f6] shadow-[0_28px_60px_-28px_rgba(15,23,42,0.45)] ring-1 ring-black/10"
    >
      <div className="flex items-center gap-3 border-b border-black/5 bg-white px-3 py-2">
        <div className="hidden items-center gap-3 text-[11px] text-neutral-500 sm:flex">
          <span className="inline-flex items-center gap-1">
            <LayoutTemplate className="size-3.5" />
            {hero.tools.template}
          </span>
          <span className="inline-flex items-center gap-1 font-medium text-neutral-900">
            <Type className="size-3.5" />
            {hero.tools.text}
          </span>
          <span className="inline-flex items-center gap-1">
            <ImageIcon className="size-3.5" />
            {hero.tools.image}
          </span>
        </div>
        <span className="ml-auto rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] text-neutral-500">
          {hero.editor}
        </span>
      </div>
      <div className="flex min-h-64 sm:min-h-72">
        <div className="flex w-12 shrink-0 flex-col items-center gap-2 border-r border-black/5 bg-white py-3">
          <RailButton>
            <Plus className="size-4" />
          </RailButton>
          <RailButton active>
            <Type className="size-4" />
          </RailButton>
          <RailButton>
            <ImageIcon className="size-4" />
          </RailButton>
          <RailButton>
            <LayoutTemplate className="size-4" />
          </RailButton>
        </div>
        <div className="relative flex flex-1 items-center bg-[radial-gradient(circle,#d4d4d8_1px,transparent_1px)] [background-size:14px_14px] p-4 sm:pr-16">
          <div className="flex w-[min(100%,16rem)] flex-col items-start rounded-lg bg-white p-3 shadow-md ring-1 ring-black/5">
            <div className="inline-flex rounded-md bg-[#ef3b6a] px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-white">
              {hero.canvas.badge}
            </div>
            <div className="relative mt-8 inline-block max-w-full">
              <div className="absolute -top-6 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-md bg-white px-1.5 py-0.5 text-[10px] font-medium whitespace-nowrap text-neutral-600 shadow-sm ring-1 ring-black/10">
                <Move className="size-3" />
                {hero.tools.position}
              </div>
              <div className="text-lg leading-none font-semibold text-[#1a1a2e]">
                {hero.canvas.title}
              </div>
              <span className="pointer-events-none absolute -inset-x-1.5 -inset-y-1 rounded-sm border-2 border-[#2f80ed]" />
              <Handle className="-top-1.5 -left-2" />
              <Handle className="-top-1.5 -right-2" />
              <Handle className="-bottom-1.5 -left-2" />
              <Handle className="-right-2 -bottom-1.5" />
            </div>
            <p className="mt-2 text-[11px] text-neutral-500">
              {hero.canvas.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RailButton({
  children,
  active = false,
}: {
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`flex size-8 items-center justify-center rounded-lg ${
        active ? 'bg-[#e8f1fc] text-[#2f80ed]' : 'text-neutral-400'
      }`}
    >
      {children}
    </span>
  );
}

function Handle({ className }: { className: string }) {
  return (
    <span
      className={`absolute size-2 border-2 border-[#2f80ed] bg-white ${className}`}
    />
  );
}
