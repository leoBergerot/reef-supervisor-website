import i18n from 'i18next';
import translationEng from "./src/translations/en/translation.json";
import translationFr from "./src/translations/fr/translation.json";
import { initReactI18next } from "react-i18next"

i18n
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
  fallbackLng: ["en", "fr"],
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
  languages: ["en", "fr"],
  resources: {
    en: {
      translations: translationEng
    },
    fr: {
      translations: translationFr
    }
  }
});

export default i18n;