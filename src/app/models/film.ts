import { People } from './people';
import { Planet } from './planet';
import { Starship } from './starship';
import { Vehicle } from './vehicle';
import { Specie } from './specie';

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  characters: People[];
  planets: Planet[];
  starships: Starship[];
  vehicles: Vehicle[];
  species: Specie[];
  created: Date;
  edited: Date;
  url: string;
}

export const filmSortOptions = [
  {
    label: 'Title A-Z', value: {
      direction: 'asc',
      column: 'title',
      type: 'string'
    }
  },
  {
    label: 'Title Z-A', value: {
      direction: 'desc',
      column: 'title',
      type: 'string'
    }
  },
  {
    label: 'Release date Ascending', value: {
      direction: 'asc',
      column: 'release_date',
      type: 'date'
    }
  },
  {
    label: 'Release date Descending', value: {
      direction: 'desc',
      column: 'release_date',
      type: 'date'
    }
  },
  {
    label: 'Director A-Z', value: {
      direction: 'asc',
      column: 'director',
      type: 'string'
    }
  },
  {
    label: 'Director Z-A', value: {
      direction: 'desc',
      column: 'director',
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