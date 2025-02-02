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

export const initialPets: Pet[] = [
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
  
  export const initialCustomers: Partial<Customer>[] = [
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