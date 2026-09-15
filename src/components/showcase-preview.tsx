import { cn } from '@/lib/cn';

export type ShowcasePreviewKind = 'share' | 'product' | 'article' | 'marketing' | 'editor';

export function ShowcasePreview({
  kind,
  className,
}: {
  kind: ShowcasePreviewKind;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn('relative isolate overflow-hidden', className)}
    >
      {kind === 'share' ? <ShareMock /> : null}
      {kind === 'product' ? <ProductMock /> : null}
      {kind === 'article' ? <ArticleMock /> : null}
      {kind === 'marketing' ? <MarketingMock /> : null}
      {kind === 'editor' ? <EditorMock /> : null}
    </div>
  );
}

function ShareMock() {
  return (
    <div className="flex size-full flex-col justify-between bg-neutral-950 p-5 text-white">
      <div className="flex items-center gap-2 text-[10px] tracking-widest text-white/50 uppercase">
        <span className="size-1.5 rounded-full bg-emerald-400" />
        Live
      </div>
      <div>
        <p className="text-xl font-semibold tracking-tight">New drop</p>
        <p className="mt-1 text-xs text-white/60">Scan to open · 分享给好友</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="size-6 rounded-full bg-white/20" />
        <span className="size-6 rounded-full bg-white/10" />
        <span className="size-6 rounded-full bg-white/10" />
      </div>
    </div>
  );
}

function ProductMock() {
  return (
    <div className="flex size-full bg-neutral-100">
      <div className="w-[42%] bg-gradient-to-br from-amber-200 to-orange-400" />
      <div className="flex flex-1 flex-col justify-between p-5 text-neutral-900">
        <p className="text-[10px] tracking-widest text-neutral-500 uppercase">SKU 2048</p>
        <div>
          <p className="text-lg font-semibold">Canvas tote</p>
          <p className="mt-1 text-sm text-neutral-500">¥129</p>
        </div>
        <span className="w-fit rounded-full bg-neutral-900 px-3 py-1 text-[10px] font-medium text-white">
          Add
        </span>
      </div>
    </div>
  );
}

function ArticleMock() {
  return (
    <div className="flex size-full flex-col justify-end bg-gradient-to-br from-stone-200 via-stone-100 to-orange-100 p-5">
      <p className="text-[10px] tracking-widest text-stone-500 uppercase">Essay</p>
      <p className="mt-2 max-w-[16rem] text-lg leading-snug font-semibold text-stone-900">
        How templates become images
      </p>
    </div>
  );
}

function MarketingMock() {
  return (
    <div className="flex size-full flex-col items-start justify-between bg-gradient-to-br from-violet-700 via-fuchsia-600 to-orange-400 p-5 text-white">
      <p className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] tracking-widest uppercase">
        48h
      </p>
      <div>
        <p className="text-3xl font-black tracking-tight">SALE</p>
        <p className="mt-1 text-xs text-white/80">Up to 40% off</p>
      </div>
      <span className="rounded-md bg-white px-3 py-1 text-[10px] font-semibold text-violet-700">
        Shop now
      </span>
    </div>
  );
}

function EditorMock() {
  return (
    <div className="size-full bg-neutral-200">
      <div
        className="size-full"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(0 0 0 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(0 0 0 / 0.06) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      >
        <div className="absolute top-6 left-8 h-[58%] w-[58%] rounded-md border-2 border-sky-500 bg-white shadow-sm">
          <div className="absolute -top-1 -left-1 size-2 bg-sky-500" />
          <div className="absolute -top-1 -right-1 size-2 bg-sky-500" />
          <div className="absolute -bottom-1 -left-1 size-2 bg-sky-500" />
          <div className="absolute -right-1 -bottom-1 size-2 bg-sky-500" />
          <div className="p-4">
            <div className="h-2 w-16 rounded bg-neutral-200" />
            <div className="mt-3 h-8 w-28 rounded bg-neutral-900" />
          </div>
        </div>
      </div>
    </div>
  );
}
