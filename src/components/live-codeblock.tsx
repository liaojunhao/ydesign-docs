'use client';

import {
  useState as useReactState,
  useSyncExternalStore,
  type ComponentProps,
  type ReactNode,
} from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { CodeBlock } from 'fumadocs-ui/components/codeblock';
import { Button } from './demo-button';
import { counterExample, helloExample, renderExample } from './live-examples';

const defaultScope = {
  Button,
  useState: useReactState,
};

const examples = {
  hello: helloExample,
  counter: counterExample,
  render: renderExample,
};

type LiveTheme = NonNullable<ComponentProps<typeof LiveProvider>['theme']>;

const githubLight: LiveTheme = {
  plain: {
    color: '#24292e',
    backgroundColor: 'transparent',
  },
  styles: [
    { types: ['comment', 'prolog', 'doctype', 'cdata'], style: { color: '#6a737d', fontStyle: 'italic' } },
    { types: ['string', 'attr-value', 'char'], style: { color: '#032f62' } },
    { types: ['punctuation', 'operator'], style: { color: '#24292e' } },
    { types: ['number', 'boolean', 'constant', 'property', 'symbol', 'builtin'], style: { color: '#005cc5' } },
    { types: ['atrule', 'keyword'], style: { color: '#d73a49' } },
    { types: ['function', 'class-name', 'maybe-class-name'], style: { color: '#6f42c1' } },
    { types: ['tag', 'selector', 'inserted'], style: { color: '#22863a' } },
    { types: ['attr-name'], style: { color: '#005cc5' } },
    { types: ['variable'], style: { color: '#24292e' } },
    { types: ['deleted'], style: { color: '#b31d28' } },
  ],
};

const githubDark: LiveTheme = {
  plain: {
    color: '#e1e4e8',
    backgroundColor: 'transparent',
  },
  styles: [
    { types: ['comment', 'prolog', 'doctype', 'cdata'], style: { color: '#6a737d', fontStyle: 'italic' } },
    { types: ['string', 'attr-value', 'char'], style: { color: '#9ecbff' } },
    { types: ['punctuation', 'operator'], style: { color: '#e1e4e8' } },
    { types: ['number', 'boolean', 'constant', 'property', 'symbol', 'builtin'], style: { color: '#79b8ff' } },
    { types: ['atrule', 'keyword'], style: { color: '#f97583' } },
    { types: ['function', 'class-name', 'maybe-class-name'], style: { color: '#b392f0' } },
    { types: ['tag', 'selector', 'inserted'], style: { color: '#85e89d' } },
    { types: ['attr-name'], style: { color: '#79b8ff' } },
    { types: ['variable'], style: { color: '#e1e4e8' } },
    { types: ['deleted'], style: { color: '#fdaeb7' } },
  ],
};

function subscribeDark(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
}

function useIsDark() {
  return useSyncExternalStore(
    subscribeDark,
    () => document.documentElement.classList.contains('dark'),
    () => false,
  );
}

export function LiveCodeBlock({
  code,
  example,
  children,
  scope,
}: {
  code?: string;
  example?: keyof typeof examples;
  children?: ReactNode;
  scope?: Record<string, unknown>;
}) {
  const source = String(code ?? (example ? examples[example] : children) ?? '').trim();
  const noInline = /\brender\s*\(/.test(source);
  const theme = useIsDark() ? githubDark : githubLight;

  return (
    <LiveProvider
      code={source}
      language="tsx"
      enableTypeScript
      noInline={noInline}
      theme={theme}
      scope={{ ...defaultScope, ...scope }}
    >
      <div className="not-prose my-4 overflow-hidden rounded-xl border bg-fd-card shadow-sm">
        <div className="p-4">
          <p className="mb-3 text-xs font-medium text-fd-muted-foreground">Preview</p>
          <LivePreview />
        </div>
        <LiveError className="m-0 bg-red-500/10 px-4 py-2 text-sm text-red-600 dark:text-red-400" />
        <CodeBlock
          className="my-0 rounded-none border-x-0 border-b-0 shadow-none"
          viewportProps={{ className: 'py-0' }}
        >
          <LiveEditor className="font-mono text-[0.8125rem] leading-6 [&_pre]:p-3.5! [&_pre]:ps-4! [&_pre]:pe-10! [&_pre]:outline-none" />
        </CodeBlock>
      </div>
    </LiveProvider>
  );
}
