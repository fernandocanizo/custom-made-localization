import { simplifyLocale } from "~/lib/simplifyLocale"

// Note: according to MDN documentation for `navigator` API,
// `navigator.languages` and the HTTP header "Accept-Language" should contain
// all user defined preferred languages, being the first one in the list the top
// most preferred. However, for security reasons, browsers only return the top
// most in "Accept-Language" header and all the browsers currently (2024-07-02)
// tested (brave, chromium, chrome, opera, firefox, vivaldi) report the system
// locale in `navigator` fields, so not really useful. But
// it's included as a fallback anyway.

export const getBrowserLanguage = (request: Request): string => {
  // attempts to detect preferred user language or defaults to English
  const languageHeader = request.headers.get("Accept-Language")

  if (languageHeader) {
    const firstLanguage = languageHeader
      .split(';')[0]
      .split(',')[0]
    return simplifyLocale(firstLanguage)
  }

  if (typeof navigator !== 'undefined') {
    const { languages, language } = navigator

    if (languages.length) {
      // first item in the array is the top-most language, hence, the one the
      // users wants to see the pages on
      return simplifyLocale(languages[0])
    }

    // if we get here, `language` should hold the top preference from the user
    if (language) {
      return simplifyLocale(language)
    }
  }

  return "en"
}
