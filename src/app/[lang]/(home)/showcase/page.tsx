import Link from 'next/link';
import type { Metadata } from 'next';
import { showcase } from '@/lib/source';
import { ShowcasePreview } from '@/components/showcase-preview';

const copy = {
  en: {
    title: 'What you can ship',
    description:
      'Same templates, two products: render images through the API, or tweak them in the visual editor.',
    kicker: 'Showcases',
    featured: 'One template powers both Image API and the Design Editor.',
    image: 'Image API',
    editor: 'Editor',
  },
  cn: {
    title: '能做出哪些图',
    description: '同一套模板，两种用法：调用 API 出图，或在可视化编辑器里改稿。',
    kicker: '场景',
    featured: '一份模板同时跑通图片 API 和在线编辑器。',
    image: '图片 API',
    editor: '在线编辑器',
  },
} as const;

function productLabel(product: 'image' | 'editor' | 'both', isCn: boolean) {
  if (product === 'image') return isCn ? '图片 API' : 'Image API';
  if (product === 'editor') return isCn ? '在线编辑器' : 'Editor';
  return isCn ? 'API + 编辑器' : 'API + Editor';
}

export default async function ShowcasePage({ params }: PageProps<'/[lang]/showcase'>) {
  const { lang } = await params;
  const isCn = lang === 'cn';
  const text = isCn ? copy.cn : copy.en;
  const items = [...showcase.getPages(lang)].sort(
    (a, b) => (a.data.order ?? 99) - (b.data.order ?? 99),
  );

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
      <section className="overflow-hidden rounded-2xl border bg-fd-card px-8 py-14 sm:px-12">
        <h1 className="max-w-xl text-4xl font-semibold tracking-tight">{text.title}</h1>
        <p className="mt-3 max-w-xl text-fd-muted-foreground">{text.description}</p>
        <Link
          href={`/${lang}/docs`}
          className="mt-8 inline-flex h-10 items-center rounded-full bg-fd-primary px-4 text-sm font-medium text-fd-primary-foreground hover:opacity-90"
        >
          {isCn ? '查看文档' : 'Read the docs'}
        </Link>
      </section>

      <p className="mt-10 mb-3 text-xs font-medium tracking-widest text-fd-muted-foreground uppercase">
        {text.kicker}
      </p>
      <div className="mb-6 flex flex-wrap items-center gap-3 rounded-xl border border-dashed px-5 py-4">
        <span className="text-sm">{text.featured}</span>
        <span className="ml-auto flex gap-2">
          <Link
            href={`/${lang}/docs`}
            className="rounded-full bg-fd-primary/10 px-3 py-1 text-xs font-medium text-fd-primary"
          >
            {text.image}
          </Link>
          <Link
            href={`/${lang}/docs/editor`}
            className="rounded-full bg-fd-primary/10 px-3 py-1 text-xs font-medium text-fd-primary"
          >
            {text.editor}
          </Link>
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            className="group overflow-hidden rounded-xl border bg-fd-card transition-colors hover:border-fd-primary/40"
          >
            <ShowcasePreview kind={item.data.preview} className="aspect-[16/10]" />
            <div className="p-4">
              <p className="text-[11px] font-medium tracking-wide text-fd-primary">
                {productLabel(item.data.product, isCn)}
              </p>
              <h2 className="mt-1 text-lg font-semibold group-hover:text-fd-primary">
                {item.data.title}
              </h2>
              {item.data.description ? (
                <p className="mt-1 text-sm text-fd-muted-foreground">{item.data.description}</p>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/showcase'>): Promise<Metadata> {
  const { lang } = await params;
  const text = lang === 'cn' ? copy.cn : copy.en;
  return {
    title: lang === 'cn' ? '场景展示' : 'Showcase',
    description: text.description,
  };
}
