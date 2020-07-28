import { Planet } from './planet'
import { Film } from './film'
import { Specie } from './specie'
import { Vehicle } from './vehicle'
import { Starship } from './starship'

export interface People {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: Planet;
  films: Film[];
  species: Specie[];
  vehicles: Vehicle[];
  starships: Starship[];
  created: Date;
  edited: Date;
  url: string;
}

export const peopleSortOptions = [
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
    label: 'Height year Ascending', 
    value: {
      direction: 'asc',
      column: 'height',
      type: 'int'
    }
  },
  {
    label: 'Height Descending', 
    value: {
      direction: 'desc',
      column: 'height',
      type: 'int'
    }
  },
  {
    label: 'Gender A-Z', 
    value: {
      direction: 'asc',
      column: 'gender',
      type: 'string'
    }
  },
  {
    label: 'Gender Z-A', 
    value: {
      direction: 'desc',
      column: 'gender',
      type: 'string'
    }
  },
  {
    label: 'Created date Ascending', value: {
      direction: 'asc',
      column: 'created',
      type: 'date'
    }
  },
  {
    label: 'Created date descending', value: {
      direction: 'desc',
      column: 'created',
      type: 'date'
    }
  },

];