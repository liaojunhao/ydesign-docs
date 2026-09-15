'use client';

import type { ButtonHTMLAttributes } from 'react';

export function Button({
  children,
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={`rounded-md bg-fd-primary px-3 py-1.5 text-sm font-medium text-fd-primary-foreground hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
