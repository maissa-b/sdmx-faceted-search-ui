import axios from 'axios';

export const SEARCH = 'SEARCH';
export const FILTER = 'FILTER';
export const FACETED_SEARCH = 'FACETED_SEARCH';
export const ADD_TO_CARD = 'ADD_TO_CARD';

export const search = value => ({ type: SEARCH, value });
export const filter = value => ({ type: FILTER, value });
export const facetedSearch = value => ({ type: FACETED_SEARCH, value });
export const addToCard = id => ({ type: ADD_TO_CARD, id });

export const getData = () => axios.post('http://rp3.redpelicans.com:3006/api/status', { startTime: 'test' }).then(({ data }) => console.log('data: ', data)).catch(err => console.log('err: ', err));

// export const getData = () => axios.post('http://rp3.redpelicans.com:3006/api/status').then(() => console.log('test')).catch(() => console.log('error bitch'));
