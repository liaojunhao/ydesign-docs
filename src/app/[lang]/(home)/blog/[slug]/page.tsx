import Link from 'next/link';
import { notFound } from 'next/navigation';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { getMDXComponents } from '@/components/mdx';
import { blog } from '@/lib/source';
import type { Metadata } from 'next';

export default async function BlogPostPage(props: PageProps<'/[lang]/blog/[slug]'>) {
  const { lang, slug } = await props.params;
  const page = blog.getPage([slug], lang);
  if (!page) notFound();

  const Mdx = page.data.body;
  const isCn = lang === 'cn';

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
      <Link href={`/${lang}/blog`} className="text-sm text-fd-muted-foreground hover:text-fd-foreground">
        {isCn ? '返回博客' : 'Back to blog'}
      </Link>
      <header className="mt-6 mb-8">
        <h1 className="text-3xl font-bold">{page.data.title}</h1>
        {page.data.description ? (
          <p className="mt-2 text-fd-muted-foreground">{page.data.description}</p>
        ) : null}
        <p className="mt-4 text-sm text-fd-muted-foreground">
          {page.data.author} · {new Date(page.data.date).toDateString()}
        </p>
      </header>
      <article className="prose min-w-0">
        <InlineTOC items={page.data.toc} />
        <Mdx components={getMDXComponents()} />
      </article>
    </main>
  );
}

export function generateStaticParams() {
  return blog.getLanguages().flatMap(({ language, pages }) =>
    pages.map((page) => ({
      lang: language,
      slug: page.slugs[0],
    })),
  );
}

export async function generateMetadata(
  props: PageProps<'/[lang]/blog/[slug]'>,
): Promise<Metadata> {
  const { lang, slug } = await props.params;
  const page = blog.getPage([slug], lang);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
