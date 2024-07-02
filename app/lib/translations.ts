export const supportedTranslations = [ "en", "es" ]

export const getSupportedLocale = (locale: string): string =>
  // fallback to English if we don't support this locale
  supportedTranslations.includes(locale) ? locale : "en"
