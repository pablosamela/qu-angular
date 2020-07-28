import { Film } from './film';
import { People } from './people';

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: number;
  length: number;
  max_atmosphering_speed: number;
  crew: string;
  passengers: number;
  cargo_capacity: number;
  consumables: string;
  hyperdrive_rating: number;
  MGLT: number;
  starship_class: string;
  pilots: People[];
  films: Film[];
  created: Date;
  edited: Date;
  url: string;
}


export const starshipSortOptions = [
  {
    label: 'Name A-Z',
    value: {
      direction: 'asc',
      column: 'name',
      type: 'string'
    }
  },
  {
    label: 'Name Z-A',
    value: {
      direction: 'desc',
      column: 'name',
      type: 'string'
    }
  },
  {
    label: 'Manufacturer A-Z',
    value: {
      direction: 'asc',
      column: 'manufacturer',
      type: 'string'
    }
  },
  {
    label: 'Manufacturer Z-A',
    value: {
      direction: 'desc',
      column: 'manufacturer',
      type: 'string'
    }
  },
  {
    label: 'Cargo capacity ascending',
    value: {
      direction: 'asc',
      column: 'cargo_capacity',
      type: 'int'
    }
  },
  {
    label: 'Cargo capacity descending', 
    value: {
      direction: 'desc',
      column: 'cargo_capacity',
      type: 'int'
    }
  },
  {
    label: 'Created date Ascending', 
    value: {
      direction: 'asc',
      column: 'created',
      type: 'date'
    }
  },
  {
    label: 'Created date descending', 
    value: {
      direction: 'desc',
      column: 'created',
      type: 'date'
    }
  },
]