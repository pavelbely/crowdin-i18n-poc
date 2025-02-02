import { useNavigate, useParams } from 'react-router-dom';

export const useLanguage = () => {
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();

  const changeLanguage = (newLang: string) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${lang}`, `/${newLang}`);
    navigate(newPath);
  };

  return {
    currentLanguage: lang,
    changeLanguage
  };
}; 