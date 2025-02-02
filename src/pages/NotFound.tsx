import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { defaultLanguage } from '../i18n/config';

export const NotFound: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  // Use current language if available, otherwise default
  const currentLang = i18n.language || defaultLanguage;

  return (
    <div className="not-found">
      <h1>{t('404.title', '404 - Page Not Found')}</h1>
      <p>{t('404.description', 'The page you are looking for does not exist.')}</p>
      <Link 
        to={`/${currentLang}`} 
      >
        {t('404.backHome', 'Back to Home')}
      </Link>
    </div>
  );
}; 