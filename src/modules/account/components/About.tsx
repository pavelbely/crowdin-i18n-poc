import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { useModuleTranslation } from '../../../localization/useModuleTranslation';

export const About: React.FC = () => {
  const { at } = useModuleTranslation();

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {at('about.title')}
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom color="primary">
          {at('about.subtitle')}
        </Typography>

        <Typography>
          {at('about.intro')}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          {at('about.mission.title')}
        </Typography>
        <Typography>
          {at('about.mission.content')}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          {at('about.values.title')}
        </Typography>
        <Typography>
          {at('about.values.content')}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          {at('about.contact.title')}
        </Typography>
        <Typography>
          {at('about.contact.content')}
        </Typography>
      </Box>
    </Container>
  );
}; 