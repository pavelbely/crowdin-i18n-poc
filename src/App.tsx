import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageWrapper } from './components/LanguageWrapper';
import PetShop from './components/PetShop';
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
        
        {/* Language-specific routes */}
        <Route 
          path="/:lang" 
          element={
            <LanguageWrapper>
              <PetShop />
            </LanguageWrapper>
          } 
        />
        
        {/* Catch all other routes and redirect to default language */}
        <Route 
          path="*" 
          element={<Navigate to="/en" replace />} 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App; 