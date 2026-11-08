import Link from "next/link";

export function NotFoundContent() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold text-ink">Page introuvable</h1>
      <p className="mt-4 leading-relaxed">Cette adresse ne correspond à aucune page.</p>
      <p className="mt-6 leading-relaxed" lang="en">
        You just hit a route that doesn&apos;t exist... the sadness.
      </p>
      <p className="mt-8 flex justify-center gap-4">
        <Link
          href="/fr"
          className="font-semibold text-sea-dark underline decoration-sea/40 underline-offset-4"
        >
          Accueil
        </Link>
        <Link
          href="/en"
          hrefLang="en"
          lang="en"
          className="font-semibold text-sea-dark underline decoration-sea/40 underline-offset-4"
        >
          Home
        </Link>
      </p>
    </div>
  );
}
