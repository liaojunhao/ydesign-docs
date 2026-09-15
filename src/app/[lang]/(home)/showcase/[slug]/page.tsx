import Link from 'next/link';
import { notFound } from 'next/navigation';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { getMDXComponents } from '@/components/mdx';
import { showcase } from '@/lib/source';
import { ShowcasePreview } from '@/components/showcase-preview';
import type { Metadata } from 'next';

function productLabel(product: 'image' | 'editor' | 'both', isCn: boolean) {
  if (product === 'image') return isCn ? '图片 API' : 'Image API';
  if (product === 'editor') return isCn ? '在线编辑器' : 'Editor';
  return isCn ? 'API + 编辑器' : 'API + Editor';
}

export default async function ShowcaseItemPage(
  props: PageProps<'/[lang]/showcase/[slug]'>,
) {
  const { lang, slug } = await props.params;
  const page = showcase.getPage([slug], lang);
  if (!page) notFound();

  const Mdx = page.data.body;
  const isCn = lang === 'cn';

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
      <Link
        href={`/${lang}/showcase`}
        className="text-sm text-fd-muted-foreground hover:text-fd-foreground"
      >
        {isCn ? '返回场景' : 'Back to showcase'}
      </Link>
      <header className="mt-6 mb-8">
        <p className="text-sm font-medium text-fd-primary">
          {productLabel(page.data.product, isCn)}
        </p>
        <h1 className="mt-2 text-3xl font-bold">{page.data.title}</h1>
        {page.data.description ? (
          <p className="mt-2 text-fd-muted-foreground">{page.data.description}</p>
        ) : null}
      </header>
      <ShowcasePreview
        kind={page.data.preview}
        className="mb-10 aspect-[16/9] rounded-xl border"
      />
      <article className="prose min-w-0">
        <InlineTOC items={page.data.toc} />
        <Mdx components={getMDXComponents()} />
      </article>
    </main>
  );
}

export function generateStaticParams() {
  return showcase.getLanguages().flatMap(({ language, pages }) =>
    pages.map((page) => ({
      lang: language,
      slug: page.slugs[0],
    })),
  );
}

export async function generateMetadata(
  props: PageProps<'/[lang]/showcase/[slug]'>,
): Promise<Metadata> {
  const { lang, slug } = await props.params;
  const page = showcase.getPage([slug], lang);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
