import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GameState, Pet, Customer } from '../types/PetShop';
import PetList from './PetList';
import CustomerView from './CustomerView';
import parse from 'html-react-parser';

// Sample initial data
const initialPets: Pet[] = [
  {
    id: '1',
    name: 'Max',
    type: 'dog',
    gender: 'male',
    age: 2,
    isAdopted: false
  },
  {
    id: '2',
    name: 'Luna',
    type: 'cat',
    gender: 'female',
    age: 1,
    isAdopted: false
  },
  {
    id: '3',
    name: 'Charlie',
    type: 'bird',
    gender: 'male',
    age: 0,
    isAdopted: false
  }
];

const initialCustomers: Customer[] = [
  {
    id: '1',
    name: 'John Smith',
    gender: 'male',
    preferredPets: ['dog', 'cat'],
    adoptedPets: []
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    gender: 'female',
    preferredPets: ['cat', 'bird'],
    adoptedPets: []
  }
];

const PetShop: React.FC = () => {
  const { t } = useTranslation();
  const [gameState, setGameState] = useState<GameState>({
    pets: initialPets,
    customers: initialCustomers,
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
        <button onClick={addNewPet} className="control-button">
          Add New Pet
        </button>
        <button onClick={advanceDay} className="control-button">
          Next Day
        </button>
      </div>

      <div className="shop-notices">
        <div className="important-notice">
          {parse(t('shop.formatting.important'))}
        </div>
        <div className="recommendations">
          {parse(t('shop.formatting.emphasis'))}
        </div>
        <div className="mission">
          {parse(t('shop.formatting.mixed'))}
        </div>
        <div className="benefits">
          {parse(t('shop.formatting.list'))}
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