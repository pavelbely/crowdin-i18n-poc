import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams, Outlet, Link } from 'react-router-dom';
import React from 'react';
import { supportedLanguages, defaultLanguage } from '../../i18n/config';
import { LanguageSwitcher } from './LanguageSwitcher';
import { DefaultBrowserLanguage } from './DefaultBrowserLanguage';

export const LanguageWrapper: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();

  useEffect(() => {
    if (!lang) {
      navigate(`/${defaultLanguage}`, { replace: true });
      return;
    }

    if (!supportedLanguages.includes(lang)) {
      navigate('/404', { replace: true });
      return;
    }

    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, navigate, i18n]);

  if (!lang || !supportedLanguages.includes(lang)) {
    return null;
  }

  return (
    <>
      <div className="menu">
        <Link to={`/${lang}`}>{t('navigation.home')}</Link>
        <Link to={`/${lang}/about`}>{t('navigation.about')}</Link>
        <LanguageSwitcher />
        <DefaultBrowserLanguage />
      </div>
      <Outlet />
    </>
  );
}; 