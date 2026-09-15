import SearchDialog from '@/components/search';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { i18nProvider } from 'fumadocs-ui/i18n';
import type { ReactNode } from 'react';
import { i18n, translations } from '@/lib/i18n';
import { HtmlLang } from './html-lang';

export function Provider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  const lang = locale as (typeof i18n.languages)[number];

  return (
    <RootProvider i18n={i18nProvider(translations, lang)} search={{ SearchDialog }}>
      <HtmlLang locale={lang} />
      {children}
    </RootProvider>
  );
}
