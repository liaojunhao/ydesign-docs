'use client';

import { useState, type ReactNode } from 'react';
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
  variables: {
    panel: string;
    type: string;
    defaultValue: string;
  };
  canvas: {
    badge: string;
    title: string;
    titleLabel: string;
    subtitle: string;
    cta: string;
    price: string;
    original: string;
  };
};

export function HeroVisual({ hero }: { hero: HeroCopy }) {
  const [title, setTitle] = useState(hero.canvas.title);

  return (
    <div className="@container overflow-hidden rounded-2xl bg-[#f3f4f6] shadow-[10px_10px_0_rgba(23,33,13,0.18)] ring-1 ring-black/10">
      <div className="flex flex-col @min-[36rem]:grid @min-[36rem]:grid-cols-[minmax(0,1.15fr)_minmax(9.75rem,11rem)_minmax(0,0.95fr)]">
        <section className="@container/editor flex min-w-0 flex-col">
          <div className="flex h-10 items-center gap-2 border-b border-black/5 bg-white px-3">
            <div className="hidden min-w-0 items-center gap-2 text-[11px] text-neutral-500 sm:flex">
              <span className="inline-flex items-center gap-1">
                <LayoutTemplate className="size-3.5 shrink-0" />
                <span className="hidden @min-[16rem]/editor:inline">
                  {hero.tools.template}
                </span>
              </span>
              <span className="inline-flex items-center gap-1 font-medium text-neutral-900">
                <Type className="size-3.5 shrink-0" />
                <span className="hidden @min-[16rem]/editor:inline">
                  {hero.tools.text}
                </span>
              </span>
              <span className="inline-flex items-center gap-1">
                <ImageIcon className="size-3.5 shrink-0" />
                <span className="hidden @min-[16rem]/editor:inline">
                  {hero.tools.image}
                </span>
              </span>
            </div>
            <span className="ml-auto rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] text-neutral-500">
              {hero.editor}
            </span>
          </div>
          <EditorFrame hero={hero} title={title} onTitleChange={setTitle} />
        </section>
        <VariablePanel hero={hero} title={title} onTitleChange={setTitle} />
        <section className="flex min-w-0 flex-col border-t border-black/5 @min-[36rem]:border-t-0 @min-[36rem]:border-l">
          <div className="flex h-10 items-center justify-end border-b border-black/5 bg-white px-3">
            <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] text-neutral-500">
              Preview
            </span>
          </div>
          <div className="flex flex-1 items-center justify-center bg-[#f5f0e8] p-4">
            <PromoPoster
              className="w-[min(100%,16rem)] rounded-lg shadow-md ring-1 ring-black/5"
              hero={hero}
              title={title}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function VariablePanel({
  hero,
  title,
  onTitleChange,
}: {
  hero: HeroCopy;
  title: string;
  onTitleChange: (value: string) => void;
}) {
  return (
    <section className="flex min-w-0 flex-col border-t border-black/5 bg-white @min-[36rem]:border-t-0 @min-[36rem]:border-l">
      <div className="flex h-10 shrink-0 items-center border-b border-black/5 px-3">
        <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] text-neutral-500">
          {hero.variables.panel}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-neutral-900">
            {hero.canvas.titleLabel}
          </span>
          <span className="rounded-md bg-neutral-100 px-1.5 py-0.5 text-[10px] text-neutral-500">
            {hero.variables.type}
          </span>
        </div>
        <label className="block">
          <span className="mb-1 block text-[11px] text-neutral-400">
            {hero.variables.defaultValue}
          </span>
          <input
            aria-label={hero.canvas.titleLabel}
            className="w-full rounded-md border border-neutral-200 bg-neutral-50 px-2 py-1.5 text-sm text-neutral-900 outline-none focus:border-[#2f80ed] focus:bg-white"
            maxLength={16}
            value={title}
            onChange={(event) => onTitleChange(event.target.value)}
          />
        </label>
      </div>
    </section>
  );
}

function EditorFrame({
  hero,
  title,
  onTitleChange,
}: {
  hero: HeroCopy;
  title: string;
  onTitleChange: (value: string) => void;
}) {
  return (
    <div className="flex min-h-56 flex-1 @min-[36rem]:min-h-64">
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
      <div className="relative flex flex-1 items-center justify-center bg-[radial-gradient(circle,#d4d4d8_1px,transparent_1px)] [background-size:14px_14px] p-4">
        <PromoPoster
          className="w-[min(100%,15rem)] rounded-lg shadow-md ring-1 ring-black/5"
          hero={hero}
          title={title}
          onTitleChange={onTitleChange}
        />
      </div>
    </div>
  );
}

const titleClass =
  'text-[clamp(1rem,7.4cqi,1.85rem)] leading-[1.12] font-extrabold tracking-tight';

function PromoPoster({
  hero,
  title,
  onTitleChange,
  className = 'w-full rounded-2xl shadow-xl',
}: {
  hero: HeroCopy;
  title: string;
  onTitleChange?: (value: string) => void;
  className?: string;
}) {
  const { canvas } = hero;

  return (
    <div
      className={`@container relative aspect-[1024/682] overflow-hidden ${className}`}
    >
      <img
        alt={onTitleChange ? '' : hero.imageAlt}
        className="absolute inset-0 size-full object-cover"
        src="/images/hero_product_bg.jpg"
      />
      <div className="relative flex h-full flex-col justify-between py-[7%] pr-[46%] pl-[6.5%] text-[#172033]">
        <div>
          <span className="inline-flex rounded-md bg-[#ff4d61] px-[0.55em] py-[0.28em] text-[clamp(0.55rem,2.6cqi,0.8rem)] leading-none font-bold tracking-wide text-white">
            {canvas.badge}
          </span>
          {onTitleChange ? (
            <EditableTitle
              label={canvas.titleLabel}
              position={hero.tools.position}
              title={title}
              onTitleChange={onTitleChange}
            />
          ) : (
            <p className={`mt-[0.45em] line-clamp-2 ${titleClass}`}>
              {title || '\u00a0'}
            </p>
          )}
          <p className="mt-[0.35em] text-[clamp(0.62rem,3.15cqi,0.95rem)] leading-snug font-semibold text-[#3c4a63]">
            {canvas.subtitle}
          </p>
          <span className="mt-[0.7em] inline-flex items-center rounded-full bg-[#172033] px-[0.9em] py-[0.42em] text-[clamp(0.55rem,2.5cqi,0.78rem)] leading-none font-medium text-white">
            {canvas.cta} →
          </span>
        </div>
        <p className="flex items-baseline gap-[0.35em]">
          <span className="text-[clamp(0.95rem,5.6cqi,1.55rem)] leading-none font-extrabold tracking-tight">
            {canvas.price}
          </span>
          <span className="text-[clamp(0.62rem,3cqi,0.95rem)] leading-none font-semibold text-[#8b93a7] line-through">
            {canvas.original}
          </span>
        </p>
      </div>
    </div>
  );
}

function EditableTitle({
  title,
  label,
  position,
  onTitleChange,
}: {
  title: string;
  label: string;
  position: string;
  onTitleChange: (value: string) => void;
}) {
  return (
    <div className="relative mt-[0.45em] mb-1.5 grid w-max max-w-full">
      {/* <div className="absolute -top-7 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-md bg-white px-1.5 py-0.5 text-[10px] font-medium whitespace-nowrap text-neutral-600 shadow-sm ring-1 ring-black/10">
        <Move className="size-3" />
        {position}
      </div> */}
      <span
        aria-hidden
        className={`invisible col-start-1 row-start-1 px-px whitespace-pre ${titleClass}`}
      >
        {title || label}
      </span>
      <input
        aria-label={label}
        className={`col-start-1 row-start-1 w-full min-w-0 bg-transparent px-px outline-none ${titleClass}`}
        maxLength={16}
        size={1}
        value={title}
        onChange={(event) => onTitleChange(event.target.value)}
      />
      <span className="pointer-events-none absolute -inset-x-1.5 -inset-y-1 rounded-sm border-2 border-[#2f80ed]" />
      <Handle className="-top-1.5 -left-2" />
      <Handle className="-top-1.5 -right-2" />
      <Handle className="-bottom-1.5 -left-2" />
      <Handle className="-right-2 -bottom-1.5" />
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
      className={`pointer-events-none absolute size-2 border-2 border-[#2f80ed] bg-white ${className}`}
    />
  );
}
