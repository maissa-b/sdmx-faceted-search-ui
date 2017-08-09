const title = 'SDMX';
const langs = [
  { id: 1, value: 'Fr' },
  { id: 2, value: 'En' },
  { id: 3, value: 'Du' },
];
const resultItems = [
  {
    id: 1,
    payload: {
      name: 'vtt',
      type: 'vtt',
      category: 'velo',
      price: 200,
      image: '',
      quantity: 5,
      popularity: 0,
    },
  },
  {
    id: 2,
    payload: {
      name: 'velo de course',
      type: 'velo de course',
      category: 'velo',
      price: 500,
      image: '',
      quantity: 8,
      popularity: 5,
    },
  },
  {
    id: 3,
    payload: {
      name: 'velo de ville',
      type: 'velo de ville',
      category: 'velo',
      price: 150,
      image: '',
      quantity: 1,
      popularity: 2,
    },
  },
  {
    id: 4,
    payload: {
      name: 'velo electrique',
      type: 'velo electrique',
      category: 'velo',
      price: 800,
      image: '',
      quantity: 2,
      popularity: 0,
    },
  },
];

const searchValue = 'test';
const facetedValue = '';
const filterValue = '';
const cardItems = [];
const fruit = {
  icon: '',
  color: '',
};
const fruits = new Array(9);
const isSearchDisabled = false;

export const initialState = {
  title,
  langs,
  resultItems,
  searchValue,
  facetedValue,
  filterValue,
  cardItems,
  fruit,
  fruits,
  isSearchDisabled,
};
