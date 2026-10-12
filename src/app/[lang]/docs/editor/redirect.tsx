'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function EditorIndexRedirect({ href }: { href: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(href);
  }, [href, router]);

  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${href}`} />
      <p className="text-fd-muted-foreground text-sm">
        <a href={href}>{href}</a>
      </p>
    </>
  );
}
