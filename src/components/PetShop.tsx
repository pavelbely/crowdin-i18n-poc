import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { GameState, Pet, Customer } from './types';
import PetList from './PetList';
import CustomerView from './CustomerView';
import { Typography } from '@mui/material';
import { initialPets, mainPoints, initialCustomers } from './constants';


const PetShop: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isEnLanguageActive, setIsEnLanguageActive] = useState(true);
  const toggleLanguage = () => {
    if (isEnLanguageActive) {
      i18n.changeLanguage('de');
    } else {
      i18n.changeLanguage('en');
    }
    setIsEnLanguageActive(!isEnLanguageActive);
  }
  const [gameState, setGameState] = useState<GameState>({
    pets: initialPets as Pet[],
    customers: initialCustomers as Customer[],
    money: 1000,
    day: 1,
    currentDate: new Date()
  });

  const handleAdoption = (pet: Pet, customer: Customer) => {
    setGameState(prev => ({
      ...prev,
      pets: prev.pets.filter(p => p.id !== pet.id),
      customers: prev.customers.map(c => 
        c.id === customer.id 
          ? { ...c, adoptedPets: [...c.adoptedPets, pet] }
          : c
      ),
      money: prev.money + 100
    }));
  };

  const addNewPet = () => {
    const newPet: Pet = {
      id: `pet-${Date.now()}`,
      name: `Pet ${gameState.pets.length + 1}`,
      type: ['dog', 'cat', 'bird', 'fish'][Math.floor(Math.random() * 4)] as Pet['type'],
      gender: Math.random() > 0.5 ? 'male' : 'female',
      age: Math.floor(Math.random() * 5),
      isAdopted: false
    };

    setGameState(prev => ({
      ...prev,
      pets: [...prev.pets, newPet]
    }));
  };

  const advanceDay = () => {
    setGameState(prev => ({
      ...prev,
      day: prev.day + 1,
      currentDate: new Date(prev.currentDate.getTime() + 24 * 60 * 60 * 1000)
    }));
  };

  return (
    <div className="pet-shop">
      <h1>{t('shop.title')}</h1>
      
      <div className="shop-stats">
        <p>{t('shop.stats.money', { 
          amount: gameState.money,
          formatParams: {
            amount: { minimumFractionDigits: 2 }
          }
        })}</p>
        <p>{t('shop.stats.day', { day: gameState.day })}</p>
        <p>{t('shop.stats.date', { 
          date: gameState.currentDate,
          formatParams: {
            date: { 
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }
          }
        })}</p>
      </div>

      <div className="shop-controls">
        <button onClick={toggleLanguage} className="primary-button">
          Toogle language
        </button>
        <button onClick={addNewPet} className="control-button">
          Add New Pet
        </button>
        <button onClick={advanceDay} className="control-button">
          Next Day
        </button>
      </div>

      <div className="shop-notices">
        <div className="important-notice">
          <Trans
            i18nKey="shop.formatting.important"
            components={{
              highlight: <Typography component="span" fontWeight="bold" />
            }}
          />
        </div>
        <div className="recommendations">
          <Trans
            i18nKey="shop.formatting.emphasis"
            components={{
              highlight: <Typography component="span" fontStyle="italic" />
            }}
          />
        </div>
        <div className="mission">
          <Trans
            i18nKey="shop.formatting.mixed"
            components={{
              highlight: <Typography component="span" fontWeight="bold" />,
              emphasis: <Typography component="span" fontStyle="italic" />
            }}
          />
        </div>
        <div className="benefits">
          <ul>
            {mainPoints.map(point => (
              <li key={point.id}>
                <Typography>
                  {t(`shop.mainPoints.${point.id}.title`)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t(`shop.mainPoints.${point.id}.description`)}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2>Available Pets</h2>
      <PetList pets={gameState.pets} />

      <h2>Customers</h2>
      <CustomerView 
        customers={gameState.customers} 
        onAdopt={handleAdoption}
      />
    </div>
  );
};

export default PetShop; 