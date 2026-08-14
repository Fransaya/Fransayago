import type { Lang } from "../data/content";

/** Pick the string (or list) for the active language. */
export function t<T>(value: { es: T; en: T }, lang: Lang): T {
  return value[lang];
}
