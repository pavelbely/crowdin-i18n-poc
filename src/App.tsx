import React from 'react';
import './i18n/config';
import PetShop from './components/PetShop';
import './styles/PetShop.css';

export const App: React.FC = () => {
  return (
    <div className="App">
      <PetShop />
    </div>
  );
}; 