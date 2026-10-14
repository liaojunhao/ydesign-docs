import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const items = {
  cn: [
    {
      href: '/cn/docs',
      title: '图片渲染文档',
      description: '基于 HTML + CSS 生成图片',
    },
    {
      href: '/cn/docs/editor',
      title: '编辑器文档',
      description: '在可视化编辑器里设计模板',
    },
  ],
  en: [
    {
      href: '/en/docs',
      title: 'Image docs',
      description: 'Generate images from HTML + CSS',
    },
    {
      href: '/en/docs/editor',
      title: 'Editor docs',
      description: 'Design templates in the visual editor',
    },
  ],
} as const;

export function DocsNavMenu({ locale }: { locale: string }) {
  const links = locale === 'cn' ? items.cn : items.en;

  return (
    <li className="group/docs relative list-none">
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-lg p-2 text-sm text-fd-muted-foreground transition-colors group-hover/docs:bg-fd-accent group-hover/docs:text-fd-accent-foreground group-focus-within/docs:bg-fd-accent group-focus-within/docs:text-fd-accent-foreground hover:text-fd-accent-foreground"
        aria-haspopup="menu"
      >
        {locale === 'cn' ? '文档' : 'Docs'}
        <ChevronDown className="size-3.5 transition-transform group-hover/docs:rotate-180 group-focus-within/docs:rotate-180" />
      </button>
      <div className="pointer-events-none invisible absolute top-full left-0 z-50 pt-2 opacity-0 transition-opacity group-hover/docs:pointer-events-auto group-hover/docs:visible group-hover/docs:opacity-100 group-focus-within/docs:pointer-events-auto group-focus-within/docs:visible group-focus-within/docs:opacity-100 max-sm:group-focus-within/docs:static">
        <div
          role="menu"
          className="w-72 rounded-xl border bg-fd-popover p-2 text-fd-popover-foreground shadow-lg"
        >
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-fd-accent"
            >
              <span className="block text-sm font-semibold">{item.title}</span>
              <span className="mt-1 block text-sm text-fd-muted-foreground">
                {item.description}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
}
