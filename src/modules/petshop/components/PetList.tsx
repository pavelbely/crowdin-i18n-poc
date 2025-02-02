import React from 'react';
import { Pet } from './types';
import { useModuleTranslation } from '../../../localization/useModuleTranslation';

interface PetListProps {
  pets: Pet[];
}

const PetList: React.FC<PetListProps> = ({ pets }) => {
  const { mt, t } = useModuleTranslation();

  if (pets.length === 0) {
    return <p className="no-pets">{t('shop.pet.noPets')}</p>;
  }

  return (
    <div className="pet-list">
      {pets.map(pet => (
        <div key={pet.id} className="pet-card">
          <h3>{t(`shop.names.pets.${pet.id}`)}</h3>
          <div className="pet-details">
            <p className="pet-type">
              {t(`shop.pet.type.${pet.type}`)}
            </p>
            <p className="pet-status">
              {mt('shop.pet.status', {
                gender: pet.gender,
                age: pet.age
              })}
            </p>
            <p className="pet-price">
              {mt('shop.pet.price', {
                price: 100,
                formatParams: {
                  price: { minimumFractionDigits: 2 }
                }
              })}
            </p>
            <p className="pet-next-checkup">
              {mt('shop.pet.nextCheckup', {
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