import axios from 'axios';

export const SEARCH = 'SEARCH';
export const FILTER = 'FILTER';
export const FACETED_SEARCH = 'FACETED_SEARCH';
export const ADD_TO_CARD = 'ADD_TO_CARD';
export const ADD_DATAFLOWS_TO_STORE = 'ADD_DATAFLOWS_TO_STORE';
export const ADD_FACETS_TO_STORE = 'ADD_FACETS_TO_STORE';

export const search = value => ({ type: SEARCH, value });
export const filter = value => ({ type: FILTER, value });
export const facetedSearch = value => ({ type: FACETED_SEARCH, value });
export const addToCard = id => ({ type: ADD_TO_CARD, id });

export const addDataflowsToStore = dataflows => ({ type: ADD_DATAFLOWS_TO_STORE, dataflows });
export const addFacetsToStore = facets => ({ type: ADD_FACETS_TO_STORE, facets });

export const getDataflows = value => dispatch =>
  axios.post('http://rp3.redpelicans.com:3006/api/search', { search: value })
    .then(({ data }) => dispatch(addDataflowsToStore(data.dataflows)))
    .catch(err => console.log('error: ', err));

export const getFacets = () => dispatch =>
  axios.post('http://rp3.redpelicans.com:3006/api/search', { search: '' })
    .then(({ data }) => dispatch(addFacetsToStore(data.facets)))
    .catch(err => console.log('error: ', err));
