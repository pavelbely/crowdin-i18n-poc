import i18n from 'i18next';
import ICU from 'i18next-icu';
import { initReactI18next } from 'react-i18next';
import { loadModuleTranslations as loadAccountTranslations } from '../modules/account/i18n';
import { loadModuleTranslations as loadPetshopTranslations } from '../modules/petshop/i18n';
import { CrowdinOtaI18next } from './crowdin';

const crowdinHash = 'e-db2f4f2a36d99746914b3b3hx5';
console.log('Initializing Crowdin with hash:', crowdinHash);
const crowdinBackend = new CrowdinOtaI18next(crowdinHash);

export const supportedLanguages = ['en', 'es', 'de'];
export const defaultLanguage = 'en';

// Initialize i18next
i18n
  .use(crowdinBackend)
  .use(new ICU())
  .use(initReactI18next)
  .init({
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    ns: ['account', 'petshop', 'translation'],
    defaultNS: 'translation',
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
    debug: true // Enable debug mode
  });

// Load module translations
loadAccountTranslations(i18n);
loadPetshopTranslations(i18n);

export default i18n;