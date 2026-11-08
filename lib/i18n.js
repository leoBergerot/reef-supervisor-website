import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import fr from "./dictionaries/fr";
import en from "./dictionaries/en";

const dictionaries = { fr, en };

export const locales = ["fr", "en"];
export const defaultLocale = "fr";

export function hasLocale(locale) {
  return Object.prototype.hasOwnProperty.call(dictionaries, locale);
}

export async function getLocale() {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  return locale;
}

export async function getDictionary() {
  const locale = await getLocale();
  return dictionaries[locale];
}
