import React from 'react';
import { Pet } from '../types/PetShop';
import { useTranslation } from 'react-i18next';

interface PetListProps {
  pets: Pet[];
}

const PetList: React.FC<PetListProps> = ({ pets }) => {
  const { t } = useTranslation();

  if (pets.length === 0) {
    return <p className="no-pets">{t('shop.pet.noPets')}</p>;
  }

  return (
    <div className="pet-list">
      {pets.map(pet => (
        <div key={pet.id} className="pet-card">
          <h3>{pet.name}</h3>
          <div className="pet-details">
            <p className="pet-type">
              {t(`shop.pet.type.${pet.type}`)}
            </p>
            <p className="pet-status">
              {t('shop.pet.status', {
                gender: pet.gender,
                age: pet.age
              })}
            </p>
            <p className="pet-price">
              {t('shop.pet.price', {
                price: 100,
                formatParams: {
                  price: { minimumFractionDigits: 2 }
                }
              })}
            </p>
            <p className="pet-next-checkup">
              {t('shop.pet.nextCheckup', {
                date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                formatParams: {
                  date: {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }
                }
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PetList; 