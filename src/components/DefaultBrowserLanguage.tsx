import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface LocationData {
  country_name: string;
  country_code: string;
}

export const DefaultBrowserLanguage: React.FC = () => {
  const { t } = useTranslation();
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Get browser's language (returns language code like 'en-US' or 'de')
  const browserLanguage = navigator.language;
  
  // Get just the primary language code (e.g., 'en' from 'en-US')
  const primaryLanguage = browserLanguage.split('-')[0];

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setLocation(data);
      } catch (error) {
        console.error('Error fetching location:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocation();
  }, []);

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
      {isLoading ? (
        <p>{t('browserLanguage.loading', 'Detecting location...')}</p>
      ) : location ? (
        <p>
          {t('browserLanguage.country', 'Your country: ')}
          <span className="font-bold">
            {location.country_name} ({location.country_code})
          </span>
        </p>
      ) : (
        <p>{t('browserLanguage.error', 'Could not detect location')}</p>
      )}
    </div>
  );
}; 