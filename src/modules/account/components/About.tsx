import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {t('about.title')}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom color="primary">
          {t('about.subtitle')}
        </Typography>

        <Typography>
          {t('about.intro')}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          {t('about.mission.title')}
        </Typography>
        <Typography>
          {t('about.mission.content')}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          {t('about.values.title')}
        </Typography>
        <Typography>
          {t('about.values.content')}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          {t('about.contact.title')}
        </Typography>
        <Typography>
          {t('about.contact.content')}
        </Typography>
      </Box>
    </Container>
  );
}; 