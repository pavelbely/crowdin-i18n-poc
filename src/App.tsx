import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageWrapper } from './localization/components/LanguageWrapper';
import PetShop from './modules/petshop/components/PetShop';
import { About } from './modules/account/components/About';
import { NotFound } from './modules/account/components/NotFound';
import './styles/PetShop.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to default language */}
        <Route 
          path="/" 
          element={<Navigate to="/en" replace />} 
        />
        
        {/* 404 route - outside of LanguageWrapper */}
        <Route 
          path="/404" 
          element={<NotFound />} 
        />
        
        {/* Language-specific routes */}
        <Route path="/:lang" element={<LanguageWrapper />}>
          <Route index element={<PetShop />} />
          <Route path="about" element={<About />} />
        </Route>
        
        {/* Prevent always redirecting to 404 when deployed to Github pages */}
        <Route 
          path="*" 
          element={<Navigate to="/en" replace />} 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App; 