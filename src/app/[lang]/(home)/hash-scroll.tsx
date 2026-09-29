'use client';

import { useEffect } from 'react';

function scrollToHash() {
  const id = decodeURIComponent(window.location.hash.replace(/^#/, ''));
  if (!id) return;
  document.getElementById(id)?.scrollIntoView();
}

function samePath(left: string, right: string) {
  return left.replace(/\/$/, '') === right.replace(/\/$/, '');
}

export function HashScroll() {
  useEffect(() => {
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);

    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest('a');
      if (!target?.href) return;
      const url = new URL(target.href);
      if (!url.hash || !samePath(url.pathname, window.location.pathname)) {
        return;
      }
      requestAnimationFrame(scrollToHash);
    };

    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('hashchange', scrollToHash);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return null;
}
