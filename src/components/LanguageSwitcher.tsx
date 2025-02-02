import { useLanguage } from '../hooks/useLanguage';
import React from 'react';

export const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <select 
        value={currentLanguage} 
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
}; 