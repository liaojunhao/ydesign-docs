import Link from 'next/link';
import { blog } from '@/lib/source';

function postDate(value: string | Date) {
  return new Date(value).toDateString();
}

export default async function BlogIndexPage({ params }: PageProps<'/[lang]/blog'>) {
  const { lang } = await params;
  const isCn = lang === 'cn';
  const posts = [...blog.getPages(lang)].sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
      <div className="mb-10 overflow-hidden rounded-2xl bg-gradient-to-br from-fd-primary/20 via-fd-card to-fd-secondary px-8 py-16">
        <h1 className="text-4xl font-semibold tracking-tight">{isCn ? '博客' : 'Blog'}</h1>
        <p className="mt-3 text-fd-muted-foreground">
          {isCn ? '最新文章与更新。' : 'Latest posts and updates.'}
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="rounded-xl border bg-fd-card p-5 transition-colors hover:bg-fd-accent/40"
          >
            <h2 className="text-lg font-semibold">{post.data.title}</h2>
            {post.data.description ? (
              <p className="mt-2 text-sm text-fd-muted-foreground">{post.data.description}</p>
            ) : null}
            <p className="mt-4 text-sm text-fd-primary">{postDate(post.data.date)}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
