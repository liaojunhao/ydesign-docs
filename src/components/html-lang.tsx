'use client';

import { useEffect } from 'react';
import { htmlLang } from '@/lib/i18n';
import { isAppLocale, localeStorageKey } from '@/lib/locale-preference';

const sessionKey = `${localeStorageKey}-session`;

export function HtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = htmlLang(locale);
    if (!isAppLocale(locale)) return;

    try {
      const previous = sessionStorage.getItem(sessionKey);
      sessionStorage.setItem(sessionKey, locale);
      if (previous && previous !== locale) {
        localStorage.setItem(localeStorageKey, locale);
      }
    } catch {
      // private mode may block storage
    }
  }, [locale]);

  return null;
}
