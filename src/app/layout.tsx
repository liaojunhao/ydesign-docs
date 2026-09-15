import { Inter } from 'next/font/google';
import './global.css';
import { localeRedirectScript } from '@/lib/locale-preference';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeRedirectScript }} />
      </head>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
