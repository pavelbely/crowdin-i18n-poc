import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import { supportedLanguages, defaultLanguage } from '../../i18n/config';
import { LanguageSwitcher } from './LanguageSwitcher';
import { DefaultBrowserLanguage } from './DefaultBrowserLanguage';


export const LanguageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    
    // If no language in URL or unsupported language, redirect to default
    if (!lang) {
      navigate(`/${defaultLanguage}`, { replace: true });
      return;
    }

    // Check if it's a 2-letter code
    const isValidFormat = /^[a-z]{2}$/.test(lang);
    
    if (!isValidFormat) {
      // If not a valid 2-letter code, redirect to 404
      navigate('/404', { replace: true });
      return;
    }

    if (!supportedLanguages.includes(lang)) {
      // If valid 2-letter code but not supported, redirect to default
      navigate(`/${defaultLanguage}`, { replace: true });
      return;
    }

    // Change language if it differs from current
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n, navigate]);

  // Don't render until we have the right language
  if (!lang || !supportedLanguages.includes(lang)) {
    return null;
  }

  return <>
    <LanguageSwitcher />
    {children}

    <DefaultBrowserLanguage />
  </>;
}; 