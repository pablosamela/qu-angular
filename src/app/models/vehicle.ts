import { People } from './people'
import { Film } from './film'

export interface Vehicle {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: number;
  length: number;
  max_atmosphering_speed: number;
  crew: number;
  passengers: number;
  cargo_capacity: number;
  consumables: string;
  vehicle_class: string;
  pilots: People[];
  films: Film[];
  created: Date;
  edited: Date;
  url: string;
}


export const vehicleSortOptions = [
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
    label: 'Crew ascending', 
    value: {
      direction: 'asc',
      column: 'crew',
      type: 'int'
    }
  },
  {
    label: 'Crew descending', 
    value: {
      direction: 'desc',
      column: 'crew',
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
];