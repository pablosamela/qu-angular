import { People } from './people'
import { Film } from './film'

export interface Planet {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: People[];
  films: Film[];
  created: Date;
  edited: Date;
  url: string;
}

export const planetSortOptions = [
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
    label: 'Terrain A-Z',
    value: {
      direction: 'asc',
      column: 'terrain',
      type: 'string'
    }
  },
  {
    label: 'Terrain Z-A',
    value: {
      direction: 'desc',
      column: 'terrain',
      type: 'string'
    }
  },
  {
    label: 'Diameter ascending',
    value: {
      direction: 'asc',
      column: 'diameter',
      type: 'int'
    }
  },
  {
    label: 'Diameter descending',
    value: {
      direction: 'desc',
      column: 'diameter',
      type: 'int'
    }
  },
  {
    label: 'Created date ascending',
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