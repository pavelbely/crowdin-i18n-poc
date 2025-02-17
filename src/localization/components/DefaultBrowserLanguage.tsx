import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '../../i18n/config';
import { countryToLanguage } from '../constants';

import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  Button
} from '@mui/material';

interface LocationData {
  country_name: string;
  country_code: string;
}

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
        // const response = await fetch('https://ipapi.co/json/');
        // const data = await response.json();
        setLocation({
          country_name: 'United States',
          country_code: 'US'
        });
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
        {t('browserLanguage.full')}
        <span className="font-bold">{browserLanguage}</span>
      </p>
      <p className="mb-3">
        {t('browserLanguage.primary')}
        <span className="font-bold">{primaryLanguage}</span>
      </p>
      {isLoading ? (
        <p>{t('browserLanguage.loading')}</p>
      ) : location ? (
        <>
          <p className="mb-3">
            {t('browserLanguage.country')}
            <span className="font-bold">
              {location.country_name} ({location.country_code})
            </span>
          </p>
          <p className="mb-3">
            {t('browserLanguage.countryLanguage')}
            <span className="font-bold">
              {countryLanguage 
                ? `${t(`languages.${countryLanguage}`, countryLanguage)} (${
                    isSupported 
                      ? t('browserLanguage.supported') 
                      : t('browserLanguage.notSupported')
                  })`
                : t('browserLanguage.unknownLanguage')}
            </span>
          </p>
        </>
      ) : (
        <p>{t('browserLanguage.error')}</p>
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