
// Import all English translation files from different locations
import mainTranslations from './locales/en/translation.json';
import accountTranslations from '../modules/account/locales/en/translation.json';
import petshopTranslations from '../modules/petshop/locales/en/translation.json';

function flattenObject(obj: any, prefix = ''): Record<string, string> {
	return Object.keys(obj).reduce((acc: Record<string, string>, key: string) => {
	  const prefixedKey = prefix ? `${prefix}.${key}` : key;
	  
	  if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
		Object.assign(acc, flattenObject(obj[key], prefixedKey));
	  } else {
		acc[prefixedKey] = obj[key];
	  }
	  
	  return acc;
	}, {});
  }

  // Load all translation flattened
export const LOCAL_TRANSLATIONS_FLATTENED = {
    ...flattenObject(mainTranslations),
    ...flattenObject(accountTranslations),
    ...flattenObject(petshopTranslations)
};
