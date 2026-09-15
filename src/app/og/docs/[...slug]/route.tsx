import { source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { generateOGImage } from 'fumadocs-ui/og';
import { getAppName, getPageImageUrl } from '@/lib/shared';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/og/docs/[...slug]'>) {
  const { slug } = await params;
  const locale = slug[0];
  const page = source.getPage(slug.slice(1, -1), locale);
  if (!page) notFound();

  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: getAppName(locale),
  });
}

export function generateStaticParams() {
  return source.getLanguages().flatMap(({ pages }) =>
    pages.map((page) => ({
      slug: getPageImageUrl(page).segments,
    })),
  );
}
