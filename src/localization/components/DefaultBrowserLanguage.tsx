import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '../../i18n/config';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  Button,
  IconButton
} from '@mui/material';

interface LocationData {
  country_name: string;
  country_code: string;
}

// Common country code to language mappings
// This is a simplified list - you might want to expand it
const countryToLanguage: { [key: string]: string } = {
  // English-speaking countries
  US: 'en', UK: 'en', AU: 'en', CA: 'en', NZ: 'en',
  // Spanish-speaking countries
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es',
  // German-speaking countries
  DE: 'de', AT: 'de', CH: 'de',
  // Add more as needed
  IL: 'he',
};

export const DefaultBrowserLanguage: React.FC = () => {
  const { t } = useTranslation();
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  
  const browserLanguage = navigator.language;
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

  // Get language based on country code
  const countryLanguage = location?.country_code 
    ? countryToLanguage[location.country_code] 
    : undefined;
    const isSupported = supportedLanguages.includes(countryLanguage || '');

  const Content = () => (
    <>
      <p className="mb-3">
        {t('browserLanguage.full', 'Your browser language is: ')}
        <span className="font-bold">{browserLanguage}</span>
      </p>
      <p className="mb-3">
        {t('browserLanguage.primary', 'Primary language code: ')}
        <span className="font-bold">{primaryLanguage}</span>
      </p>
      {isLoading ? (
        <p>{t('browserLanguage.loading', 'Detecting location...')}</p>
      ) : location ? (
        <>
          <p className="mb-3">
            {t('browserLanguage.country', 'Your country: ')}
            <span className="font-bold">
              {location.country_name} ({location.country_code})
            </span>
          </p>
          <p className="mb-3">
            {t('browserLanguage.countryLanguage', 'Common language in your country: ')}
            <span className="font-bold">
              {countryLanguage 
                ? `${t(`languages.${countryLanguage}`, countryLanguage)} (${
                    isSupported 
                      ? t('browserLanguage.supported') 
                      : t('browserLanguage.notSupported')
                  })`
                : t('browserLanguage.unknownLanguage', 'Unknown')}
            </span>
          </p>
        </>
      ) : (
        <p>{t('browserLanguage.error', 'Could not detect location')}</p>
      )}
    </>
  );

  return (
    <div>
      <Button 
        variant="text" 
        onClick={() => setIsOpen(true)}
        className="info-button"
        size="small"
      >
        ℹ️
      </Button>

      <Dialog 
        open={isOpen} 
        onClose={() => setIsOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <div className="flex justify-between items-center">
            {t('browserLanguage.dialogTitle', 'Language Information')}
            <IconButton
              onClick={() => setIsOpen(false)}
              size="small"
              aria-label="close"
            >
              ✕
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <Content />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>
            {t('common.close', 'Close')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}; 