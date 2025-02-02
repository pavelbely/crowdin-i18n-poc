import React from 'react';
import { useTranslation } from 'react-i18next';

export const DefaultBrowserLanguage: React.FC = () => {
  const { t } = useTranslation();
  
  // Get browser's language (returns language code like 'en-US' or 'de')
  const browserLanguage = navigator.language;
  
  // Get just the primary language code (e.g., 'en' from 'en-US')
  const primaryLanguage = browserLanguage.split('-')[0];

  return (
    <div className="text-center p-4">
      <p>
        {t('browserLanguage.full', 'Your browser language is: ')}
        <span className="font-bold">{browserLanguage}</span>
      </p>
      <p>
        {t('browserLanguage.primary', 'Primary language code: ')}
        <span className="font-bold">{primaryLanguage}</span>
      </p>
    </div>
  );
}; 