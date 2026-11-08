import Link from "next/link";
import { Shot } from "@/components/shot";
import { APP_URL } from "@/lib/links";
import { media } from "@/lib/media";
import { topicOrder } from "@/lib/topics";
import { getDictionary, getLocale } from "@/lib/i18n";

export async function topicMetadata(topic) {
  const dict = await getDictionary();
  const locale = await getLocale();
  const page = dict.topics[topic];
  return {
    title: page.seoTitle,
    description: page.lead,
    alternates: {
      canonical: `/${locale}/${topic}`,
      languages: {
        fr: `/fr/${topic}`,
        en: `/en/${topic}`,
      },
    },
  };
}

export async function TopicPage({ topic }) {
  const dict = await getDictionary();
  const locale = await getLocale();
  const page = dict.topics[topic];

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-sm">
        <Link
          href={`/${locale}`}
          className="font-semibold text-sea-dark underline decoration-sea/40 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea"
        >
          {dict.nav.home}
        </Link>
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink">{page.title}</h1>
      <p className="mt-4 text-lg leading-relaxed">{page.lead}</p>
      <div className="mt-8 grid gap-4">
        {page.figures.map((figure) => {
          const shot = media[figure.media];
          return (
            <figure key={figure.media} className="rounded-2xl bg-paper p-4 shadow-sm">
              <Shot
                src={shot.src}
                alt={figure.alt}
                width={shot.width}
                height={shot.height}
                closeLabel={dict.actions.close}
              />
            </figure>
          );
        })}
      </div>
      <div className="mt-10 space-y-8">
        {page.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-semibold text-ink">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
      <p className="mt-10">
        <a
          href={APP_URL}
          className="inline-flex items-center justify-center rounded-full bg-sea px-5 py-2.5 text-sm font-semibold text-white hover:bg-sea-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea"
        >
          {dict.actions.app}
        </a>
      </p>
      <nav className="mt-12 border-t border-black/10 pt-6" aria-label={dict.actions.related}>
        <ul className="flex flex-wrap gap-3">
          {topicOrder
            .filter((item) => item !== topic)
            .map((item) => (
              <li key={item}>
                <Link
                  href={`/${locale}/${item}`}
                  className="inline-flex rounded-full bg-paper px-4 py-2 text-sm font-semibold text-sea-dark shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea"
                >
                  {dict.topics[item].title}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </article>
  );
}
