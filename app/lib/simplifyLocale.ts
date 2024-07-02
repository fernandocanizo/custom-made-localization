export const simplifyLocale = (locale: string): string => {
  // removes country code from the locale code, leaving only the language
  // i.e.: "en_US" or "en-us" to "en"
  const regex = /^([a-z]{2,3})(?:[_-]([a-z]{2,3}))?$/i
  const match = locale.match(regex)
  if (match) {
    return match[1]
  } else {
    return ""
  }
}
