import es from "@i18n/es.json";
import en from "@i18n/en.json";

export type Locale = "es" | "en";

const translations = {
  es,
  en,
};

export function getTranslations(locale: Locale = "es") {
  return translations[locale] || translations.es;
}

export function getCurrentLocale(): Locale {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("locale");
    if (stored === "es" || stored === "en") {
      return stored;
    }
  }
  return "es";
}

export function setLocale(locale: Locale) {
  if (typeof window !== "undefined") {
    localStorage.setItem("locale", locale);
  }
}
