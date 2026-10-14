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
import {
  counterExample,
  helloExample,
  renderExample,
  ydesignButtonExample,
  ydesignButtonExampleEn,
} from './live-examples';

const YDESIGN_BUTTON_SCRIPT = 'https://static.yitu-design.com/button-v1.js';

type YdesignButtonConfig = {
  key?: string;
  url?: string;
  sections?: string[];
  defaultSection?: string;
  width?: number;
  height?: number;
  jsonUrl?: string;
  json?: unknown;
  publishLabel?: string;
  uploads?: unknown;
  templates?: unknown;
  translations?: unknown;
  strictOrigin?: boolean;
  onPublish?: (payload: { dataURL?: string; json?: unknown }) => void;
  onChange?: (payload: { json?: unknown }) => void;
  uploadFunc?: (file: {
    dataURL: string;
    id?: string;
    name?: string;
    mime?: string;
  }) => Promise<string>;
};

declare global {
  interface Window {
    createYdesignEditor?: (config: YdesignButtonConfig) => { destroy: () => void };
  }
}

function loadYdesignButtonScript() {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.createYdesignEditor) return Promise.resolve();

  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${YDESIGN_BUTTON_SCRIPT}"]`,
  );
  if (existing) {
    return new Promise<void>((resolve, reject) => {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('ydesign button script failed')), {
        once: true,
      });
    });
  }

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = YDESIGN_BUTTON_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('ydesign button script failed'));
    document.body.appendChild(script);
  });
}

function createYdesignEditor(config: YdesignButtonConfig) {
  return loadYdesignButtonScript().then(() => window.createYdesignEditor?.(config));
}

const defaultScope = {
  Button,
  useState: useReactState,
  createYdesignEditor,
};

const examples = {
  hello: helloExample,
  counter: counterExample,
  render: renderExample,
  ydesignButton: ydesignButtonExample,
  ydesignButtonEn: ydesignButtonExampleEn,
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
