import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageWrapper } from './localization/components/LanguageWrapper';
import PetShop from './components/PetShop';
import './styles/PetShop.css';
import { NotFound } from './pages/NotFound';

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
        <Route 
          path="/:lang" 
          element={
            <LanguageWrapper>
              <PetShop />
            </LanguageWrapper>
          } 
        />
        
        {/* Catch all other routes and redirect to 404 */}
        <Route 
          path="*" 
          element={<Navigate to="/404" replace />} 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App; 