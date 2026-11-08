import Link from "next/link";
import { Shot } from "@/components/shot";
import { APP_URL, SOURCE_URL } from "@/lib/links";
import { media } from "@/lib/media";
import { getDictionary, getLocale } from "@/lib/i18n";

const solidButton =
  "inline-flex items-center justify-center rounded-full bg-sea px-5 py-2.5 text-sm font-semibold text-white hover:bg-sea-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea";
const outlineButton =
  "inline-flex items-center justify-center rounded-full border border-sea bg-paper px-5 py-2.5 text-sm font-semibold text-sea-dark hover:bg-sea/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea";

export async function homeMetadata() {
  const dict = await getDictionary();
  const locale = await getLocale();
  return {
    title: dict.home.seoTitle,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: "/fr", en: "/en" },
    },
  };
}

export async function HomePage() {
  const dict = await getDictionary();
  const locale = await getLocale();

  return (
    <>
      <section className="bg-paper px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-5xl sm:leading-tight">
            {dict.home.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/90">{dict.home.lead}</p>
          <p className="mt-4 leading-relaxed">{dict.home.summary}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={APP_URL} className={solidButton}>
              {dict.actions.app}
            </a>
            <a href={SOURCE_URL} className={outlineButton}>
              {dict.actions.source}
            </a>
          </div>
        </div>
      </section>
      <section className="bg-sea-dark px-4 py-16" aria-label={dict.nav.primary}>
        <ul className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.home.cards.map((card) => {
            const shot = media[card.media];
            return (
              <li key={`${card.topic}-${card.media}`} className="flex">
                <article className="flex w-full flex-col rounded-2xl bg-paper p-4 shadow-sm">
                  <Shot
                    src={shot.src}
                    alt={card.alt}
                    width={shot.width}
                    height={shot.height}
                    closeLabel={dict.actions.close}
                  />
                  <h2 className="mt-4 text-xl font-semibold text-ink">{card.title}</h2>
                  <p className="mt-2 flex-1 leading-relaxed">{card.text}</p>
                  <Link
                    href={`/${locale}/${card.topic}`}
                    className="mt-4 text-sm font-semibold text-sea-dark underline decoration-sea/40 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea"
                  >
                    {dict.actions.read}
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="bg-paper px-4 py-16 text-center">
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-ink/90">
          {dict.home.prefooter}
        </p>
        <div className="mt-6">
          <a href={APP_URL} className={outlineButton}>
            {dict.actions.adopt}
          </a>
        </div>
        <p className="mt-8 text-xs tracking-[0.18em] text-ink uppercase">{dict.home.slogan}</p>
      </section>
    </>
  );
}
