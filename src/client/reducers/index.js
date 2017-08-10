import { ADD_FACETS_TO_STORE, ADD_DATAFLOWS_TO_STORE, SEARCH, FILTER, FACETED_SEARCH, ADD_TO_CARD } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchValue: action.value,
      };
    case FILTER:
      return {
        ...state,
        filterValue: action.value,
      };
    case FACETED_SEARCH:
      return {
        ...state,
        facetedValue: action.value,
      };
    case ADD_TO_CARD:
      return {
        ...state,
        cardItems: state.cardItems.concat([action.id]),
      };
    case ADD_DATAFLOWS_TO_STORE:
      return {
        ...state,
        dataflows: action.dataflows,
      };
    case ADD_FACETS_TO_STORE:
      return {
        ...state,
        facets: action.facets,
      };
    default:
      return state;
  }
};

export default reducer;
