import i18n from 'i18next';
import ICU from 'i18next-icu';
import { initReactI18next } from 'react-i18next';
import { CrowdinOtaI18next } from './crowdin';
const crowdinHash = 'e-85a52a00c57421e58efa3b3hx5';
const crowdinBackend = new CrowdinOtaI18next(crowdinHash);

export const supportedLanguages = ['en', 'es', 'de'];
export const defaultLanguage = 'en';

const loadPolyfills = async () => {
	if (!Intl.PluralRules) {
		await import('@formatjs/intl-pluralrules/polyfill');
		await import('@formatjs/intl-pluralrules/locale-data/en.js');
	}
};

// Initialize i18next
loadPolyfills().then(() => {
  i18n
    .use(crowdinBackend)
    .use(new ICU())
    .use(initReactI18next)
    .init({
      lng: defaultLanguage,
      fallbackLng: defaultLanguage,
      supportedLngs: supportedLanguages,
      keySeparator: false,
      interpolation: {
        escapeValue: false
      },
      react: {
        useSuspense: true,
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ['highlight', 'emphasis', 'list', 'item'],
      },
      compatibilityJSON: 'v3',
      returnNull: false,
      returnEmptyString: false,
      returnObjects: true,
      saveMissing: false,
      load: 'currentOnly',
      partialBundledLanguages: true,
      debug: false,
      backend: {
        wait: true,
      },
      preload: ['en'],
    });

  // Add loading event listeners
  i18n.on('loaded', (loaded) => {
    console.log('i18next translations loaded:', loaded);
  });

  i18n.on('failedLoading', (lng, ns, msg) => {
    console.error('i18next failed loading:', lng, ns, msg);
  });
});

export default i18n;