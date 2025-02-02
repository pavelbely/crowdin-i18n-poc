import { useLanguage } from '../hooks/useLanguage';
import React from 'react';
import { supportedLanguages } from '../i18n/config';

export const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <select 
        value={currentLanguage} 
        onChange={(e) => changeLanguage(e.target.value)}
      >
        {supportedLanguages.map((lang) => (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}; 