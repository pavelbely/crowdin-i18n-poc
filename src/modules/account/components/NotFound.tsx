import React from 'react';
import { Link } from 'react-router-dom';
import { defaultLanguage } from '../../../i18n/config';
import { useModuleTranslation } from '../../../localization/useModuleTranslation';

export const NotFound: React.FC = () => {
  const { at, i18n   } = useModuleTranslation();
  
  // Use current language if available, otherwise default
  const currentLang = i18n.language || defaultLanguage;

  return (
    <div className="not-found">
      <h1>{at('404.title')}</h1>
      <p>{at('404.description')}</p>
      <Link 
        to={`/${currentLang}`} 
      >
        {at('404.backHome')}
      </Link>
    </div>
  );
}; 