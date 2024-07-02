export type SupportedTranslations = "en" | "es"

export const translations: Record<SupportedTranslations, string> = {
  en: "~/translations/en/",
  es: "~/translations/es/",
}

// TODO should use node:path.join(), but I'm not sure what would it bring into
// the frontend JS. So first test the hypothesis and then deal with that issue
export const getTranslationPath = (language: SupportedTranslations, section: string): string => {
  // We'll try to match `section` to route names, but you can choose any name
  return `${translations[language]}${section}.js`
}
