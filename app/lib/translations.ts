export type SupportedTranslations = "en" | "es"

export const translations: SupportedTranslations[] = [ "en", "es" ]

// TODO use node:path.join() and move this to an `only.server` folder, this is
// not a frontend module
// Also, maybe I cannot use this, as Vite needs the dynamic import to start with
// "./" or "../"
export const getTranslationPath = (language: SupportedTranslations, section: string): string => {
  // We'll try to match `section` to route names, but you can choose any name
  return `${translations[language]}${section}.js`
}
