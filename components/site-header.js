"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { media } from "@/lib/media";

const linkClass =
  "rounded-full px-3 py-1.5 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea";

export function SiteHeader({ lang, labels }) {
  const pathname = usePathname() || `/${lang}`;
  const rest = pathname.replace(/^\/(fr|en)(?=\/|$)/, "");
  const items = [
    { href: `/${lang}`, label: labels.home, exact: true },
    { href: `/${lang}/compte`, label: labels.account },
    { href: `/${lang}/aquariums`, label: labels.aquariums },
    { href: `/${lang}/mesures`, label: labels.measures },
    { href: `/${lang}/historique`, label: labels.history },
    { href: `/${lang}/graphiques`, label: labels.chart },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center">
        <Link
          href={`/${lang}`}
          className="shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea"
        >
          <Image
            src={media.logo.src}
            alt={labels.siteName}
            width={media.logo.width}
            height={media.logo.height}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>
        <nav aria-label={labels.primary} className="md:ml-auto">
          <ul className="flex flex-wrap gap-1">
            {items.map((item) => {
              const active = item.exact
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`${linkClass} ${
                      active
                        ? "bg-sea/10 font-semibold text-sea-dark"
                        : "text-ink hover:bg-black/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav aria-label={labels.languages}>
          <ul className="flex gap-1">
            <li>
              <Link
                href={`/fr${rest}`}
                hrefLang="fr"
                lang="fr"
                aria-current={lang === "fr" ? "true" : undefined}
                className={`${linkClass} ${lang === "fr" ? "font-semibold text-sea-dark" : "text-ink"}`}
              >
                {labels.french}
              </Link>
            </li>
            <li>
              <Link
                href={`/en${rest}`}
                hrefLang="en"
                lang="en"
                aria-current={lang === "en" ? "true" : undefined}
                className={`${linkClass} ${lang === "en" ? "font-semibold text-sea-dark" : "text-ink"}`}
              >
                {labels.english}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
