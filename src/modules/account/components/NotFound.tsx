import React from 'react';
import { Link } from 'react-router-dom';
import { defaultLanguage } from '../../../i18n/config';
import { useTranslation } from 'react-i18next';

export const NotFound: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  // Use current language if available, otherwise default
  const currentLang = i18n.language || defaultLanguage;

  return (
    <div className="not-found">
      <h1>{t('404.title')}</h1>
      <p>{t('404.description')}</p>
      <Link 
        to={`/${currentLang}`} 
      >
        {t('404.backHome')}
      </Link>
    </div>
  );
}; 