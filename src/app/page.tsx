import Link from 'next/link';
import { i18n } from '@/lib/i18n';
import { LanguageRedirect } from '@/components/language-redirect';

export default function RootPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <LanguageRedirect />
      <p className="text-lg font-medium">Choose a language / 选择语言</p>
      <div className="flex gap-4">
        <Link href={`/${i18n.defaultLanguage}`} className="underline">
          English
        </Link>
        <Link href="/cn" className="underline">
          简体中文
        </Link>
      </div>
    </div>
  );
}
