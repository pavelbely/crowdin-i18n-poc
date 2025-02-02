import React from 'react';
import { useTranslation } from 'react-i18next';
import { Customer, Pet } from './types';

interface CustomerViewProps {
  customers: Customer[];
  onAdopt: (pet: Pet, customer: Customer) => void;
}

const CustomerView: React.FC<CustomerViewProps> = ({ customers, onAdopt }) => {
  const { t } = useTranslation();

  if (customers.length === 0) {
    return <p className="no-customers">{t('shop.customer.noCustomers')}</p>;
  }

  return (
    <div className="customers">
      {customers.map(customer => (
        <div key={customer.id} className="customer-card">
          <h3 className="customer-name">{customer.name}</h3>
          <div className="customer-details">
            <p className="customer-greeting">
              {t('shop.customer.greeting', {
                gender: customer.gender,
                count: customer.preferredPets.length
              })}
            </p>
            {customer.preferredPets.map(petType => (
              <p key={petType} className="customer-preference">
                {t('shop.customer.preference', {
                  gender: customer.gender,
                  petType
                })}
              </p>
            ))}
            <p className="customer-history">
              {t('shop.customer.history', {
                gender: customer.gender,
                count: customer.adoptedPets.length
              })}
            </p>
            <p className="customer-last-visit">
              {t('shop.customer.lastVisit', {
                date: new Date(),
                formatParams: {
                  date: {
                    weekday: 'long',
                    month: 'short',
                    day: 'numeric'
                  }
                }
              })}
            </p>
            <p className="customer-member-since">
              {t('shop.customer.memberSince', {
                date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
                formatParams: {
                  date: {
                    month: 'long',
                    year: 'numeric'
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

export default CustomerView; 