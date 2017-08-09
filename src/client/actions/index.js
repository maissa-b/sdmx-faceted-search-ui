import axios from 'axios';
import R from 'ramda';

export const SEARCH = 'SEARCH';
export const FILTER = 'FILTER';
export const FACETED_SEARCH = 'FACETED_SEARCH';
export const ADD_TO_CARD = 'ADD_TO_CARD';
export const LOAD_FRUIT = 'LOAD_FRUIT';
export const FRUIT_LOADED = 'FRUIT_LOADED';
export const CELL_FRUIT_LOADED = 'CELL_FRUIT_LOADED';
export const LOAD_CELL_FRUITS = 'LOAD_CELL_FRUITS';
export const LOAD_CELL_FRUIT = 'LOAD_CELL_FRUIT';
export const SWITCH_SEARCH_BUTTON = 'SWITCH_SEARCH_BUTTON';

const loadOneFruit = () => axios.get('http://rp3.redpelicans.com:3007/api/fruits').then(({ data }) => data);

export const cellFruitLoaded = (fruit, index) => ({ type: CELL_FRUIT_LOADED, fruit, index });
export const filter = value => ({ type: FILTER, value });
export const facetedSearch = value => ({ type: FACETED_SEARCH, value });
export const addToCard = id => ({ type: ADD_TO_CARD, id });

export const search = value => dispatch => {
  dispatch({ type: SWITCH_SEARCH_BUTTON });
  return dispatch(loadCellFruits()) //eslint-disable-line
  .then(() => dispatch({ type: SEARCH, value }))
  .then(() => dispatch({ type: SWITCH_SEARCH_BUTTON }))
  .then(() => setTimeout(() => console.log('Grid resolved'), 3000));
};
// export const fruitLoaded = fruit => dispatch => {
//   dispatch({ type: FRUIT_LOADED, fruit });
//   if (fruit.icon !== 'paper-plane') {
//     dispatch(loadFruit()); // eslint-disable-line no-use-before-define
//   }
// };

// export const loadFruit = () => dispatch => {
//   loadOneFruit()
//     .then(fruit => dispatch(fruitLoaded(fruit)));
//   return ({ type: 'LOAD_FRUIT' });
// };

export const loadCellFruit = index => dispatch => { //eslint-disable-line
  return loadOneFruit().then(fruit => {
    if (fruit.icon !== 'paper-plane') {
      dispatch(cellFruitLoaded(fruit, index));
      return dispatch(loadCellFruit(index));
    }
    dispatch(cellFruitLoaded(fruit, index));
  });
};

export const loadCellFruits = () => dispatch => {
  const promises = R.times(index => dispatch(loadCellFruit(index)), 9);
  return Promise.all(promises);
};
