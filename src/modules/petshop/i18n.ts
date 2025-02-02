import enTranslation from './locales/en/translation.json';
import deTranslation from './locales/de/translation.json';
import esTranslation from './locales/es/translation.json';

export const resources = {
  en: {
    petshop: enTranslation
  },
  de: {
    petshop: deTranslation
  },
  es: {
    petshop: esTranslation
  }
};

export const loadModuleTranslations = (i18next: any) => {
  Object.entries(resources).forEach(([language, namespaces]) => {
    i18next.addResourceBundle(language, 'petshop', namespaces.petshop, true, true);
  });
}; 