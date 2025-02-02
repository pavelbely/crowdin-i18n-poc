import { Customer, Pet, MainPoint } from "./types";

export const mainPoints: Partial<MainPoint>[] = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  }
];

export const initialPets: Partial<Pet>[] = [
    {
      id: '1',
      type: 'dog',
      gender: 'male',
      age: 2,
      isAdopted: false
    },
    {
      id: '2',
      type: 'cat',
      gender: 'female',
      age: 1,
      isAdopted: false
    },
    {
      id: '3',
      type: 'bird',
      gender: 'male',
      age: 0,
      isAdopted: false
    }
  ];
  
  export const initialCustomers: Partial<Customer>[] = [
    {
      id: '1',
      gender: 'male',
      preferredPets: ['dog', 'cat'],
      adoptedPets: []
    },
    {
      id: '2',
      gender: 'female',
      preferredPets: ['cat', 'bird'],
      adoptedPets: []
    }
  ];