import { SITE_URL, SOURCE_URL } from "@/lib/links";

export function Footer({ dict, year }) {
  return (
    <footer className="mt-auto border-t border-black/10 bg-paper px-4 py-6 text-center text-sm text-ink shadow-[0_-1px_4px_rgba(0,0,0,0.06)]">
      <p>
        <a
          href={SOURCE_URL}
          className="underline decoration-sea/40 underline-offset-4 hover:text-sea-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea"
        >
          {dict.footer.openSource}
        </a>
      </p>
      <p className="mt-1">
        {"Copyright © "}
        <a
          href={SITE_URL}
          className="underline decoration-sea/40 underline-offset-4 hover:text-sea-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea"
        >
          {dict.meta.siteName}
        </a>{" "}
        {year}.
      </p>
    </footer>
  );
}
