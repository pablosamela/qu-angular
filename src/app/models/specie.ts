import { Planet } from './planet';
import { People } from './people';
import { Film } from './film';

export interface Specie {
  name: string;
  classification: string;
  designation: string;
  average_height: number;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: number;
  homeworld: Planet;
  language: string;
  people: People[];
  films: Film[];
  created: Date;
  edited: Date;
  url: string;
}

export const speciesSortOptions = [
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
    label: 'Classification A-Z',
    value: {
      direction: 'asc',
      column: 'classification',
      type: 'string'
    }
  },
  {
    label: 'Classification Z-A',
    value: {
      direction: 'desc',
      column: 'classification',
      type: 'string'
    }
  },
  {
    label: 'Language A-Z',
    value: {
      direction: 'asc',
      column: 'language',
      type: 'string'
    }
  },
  {
    label: 'Language Z-A',
    value: {
      direction: 'desc',
      column: 'language',
      type: 'string'
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
  }
]