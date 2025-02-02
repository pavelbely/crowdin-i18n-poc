export interface Pet {
  id: string;
  type: 'dog' | 'cat' | 'bird' | 'fish';
  name: string;
  gender: 'male' | 'female';
  age: number;
  isAdopted: boolean;
}

export interface Customer {
  id: string;
  name: string;
  gender: 'male' | 'female' | 'other';
  preferredPets: Pet['type'][];
  adoptedPets: Pet[];
}

export interface GameState {
  pets: Pet[];
  customers: Customer[];
  money: number;
  day: number;
  currentDate: Date;
} 

export interface MainPoint {
  id: number;
  title: string;
  description: string;
}