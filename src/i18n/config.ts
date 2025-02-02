import i18n from 'i18next';
import ICU from 'i18next-icu';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';
import deTranslation from './locales/de/translation.json';

// Async function to load polyfills
const loadPolyfills = async () => {
  if (!Intl.PluralRules) {
    await import('@formatjs/intl-pluralrules/polyfill');
    await import('@formatjs/intl-pluralrules/locale-data/en.js');
  }
};

const resources = {
  en: {
    translation: enTranslation
  },
  es: {
    translation: esTranslation
  },
  de: {
    translation: deTranslation
  }
};

export const supportedLanguages = Object.keys(resources);
export const defaultLanguage = 'en';

// Initialize i18next after polyfills are loaded
loadPolyfills().then(() => {
  i18n
    .use(new ICU())
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false
      },
      react: {
        useSuspense: false,
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ['highlight', 'emphasis', 'list', 'item']
      },
      compatibilityJSON: 'v3',
      returnNull: false,
      returnEmptyString: false,
      returnObjects: true,
      saveMissing: true,
    });
});

export default i18n;