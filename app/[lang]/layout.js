import { Geist } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/links";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

async function copyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export async function generateMetadata({ params }) {
  const { lang: locale } = await params;
  if (!hasLocale(locale)) return {};
  const dict = await getDictionary();
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.siteName,
      template: `%s | ${dict.meta.siteName}`,
    },
    description: dict.meta.description,
    authors: [{ name: dict.meta.author }],
    openGraph: {
      title: dict.meta.siteName,
      description: dict.meta.description,
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary",
      title: dict.meta.siteName,
      description: dict.meta.description,
      creator: dict.meta.author,
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { lang: locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary();
  const year = await copyrightYear();

  return (
    <html lang={locale} className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-ink">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-paper focus:px-4 focus:py-2"
        >
          {dict.actions.skip}
        </a>
        <SiteHeader
          lang={locale}
          labels={{
            siteName: dict.meta.siteName,
            home: dict.nav.home,
            account: dict.nav.account,
            aquariums: dict.nav.aquariums,
            measures: dict.nav.measures,
            history: dict.nav.history,
            chart: dict.nav.chart,
            languages: dict.nav.languages,
            french: dict.nav.french,
            english: dict.nav.english,
            primary: dict.nav.primary,
          }}
        />
        <main id="contenu">{children}</main>
        <Footer dict={dict} year={year} />
      </body>
    </html>
  );
}
