import { useTranslation } from 'react-i18next';
import { TOptions } from 'i18next';

export const useModuleTranslation = () => {
  const { t, i18n } = useTranslation(['petshop', 'account']);
  
  // petshop translations
  const mt = (key: string, options?: TOptions): string => {
    // @ts-ignore - known i18next typing issue
    return t(`petshop:${key}`, options) || key;
  };

  // account translations
  const at = (key: string, options?: TOptions): string => {
    // @ts-ignore - known i18next typing issue
    return t(`account:${key}`, options) || key;
  };

  // common translations
  const ct = (key: string, options?: TOptions): string => {
    // @ts-ignore - known i18next typing issue
    return t(`common.${key}`, options) || key;
  };

  return { mt, ct, at, t, i18n };
}; 