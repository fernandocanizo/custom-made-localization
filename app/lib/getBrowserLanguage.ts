export const getBrowserLanguage = () => {
  // `navigator.userLanguage`, `navigator.browserLanguage`, and
  // `navigator.systemLanguage`, are properties used in older versions of
  // Internet Explorer
  return navigator.language ||
    // @ts-expect-error checking for old browsers, we know it doesn't have those
    // fields now
    navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage ||
    'en' // default to English
}
