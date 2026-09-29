import Link from 'next/link';

type FooterLink = {
  label: string;
  href: string;
};

export function HomeFooter({
  lang,
  brand,
  copy,
}: {
  lang: string;
  brand: string;
  copy: {
    description: string;
    product: string;
    developers: string;
    about: string;
    copyright: string;
    productLinks: readonly FooterLink[];
    developerLinks: readonly FooterLink[];
    aboutLinks: readonly FooterLink[];
  };
}) {
  return (
    <footer className="border-t border-white/15 bg-[#171f18] px-4 py-10 text-white">
      <div className="mx-auto w-full max-w-(--fd-layout-width)">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Link href={`/${lang}`} className="text-lg font-bold text-white">
              {brand}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {copy.description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterColumn title={copy.product} lang={lang} links={copy.productLinks} />
            <FooterColumn
              title={copy.developers}
              lang={lang}
              links={copy.developerLinks}
            />
            <FooterColumn title={copy.about} lang={lang} links={copy.aboutLinks} />
          </div>
        </div>
        <div className="mt-8 border-t border-white/15 pt-5">
          <p className="text-xs text-white/60">{copy.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  lang,
  links,
}: {
  title: string;
  lang: string;
  links: readonly FooterLink[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-semibold tracking-widest text-white/60 uppercase">
        {title}
      </p>
      {links.map((item) =>
        item.href ? (
          <Link
            key={item.label}
            href={`/${lang}${item.href}`}
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            {item.label}
          </Link>
        ) : (
          <span key={item.label} className="text-sm text-white/60">
            {item.label}
          </span>
        ),
      )}
    </div>
  );
}
