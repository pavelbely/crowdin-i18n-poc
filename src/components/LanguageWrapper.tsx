import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import { supportedLanguages, defaultLanguage } from '../i18n/config';


export const LanguageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    // If no language in URL or unsupported language, redirect to default
    if (!lang || !supportedLanguages.includes(lang)) {
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

  return <>{children}</>;
}; 