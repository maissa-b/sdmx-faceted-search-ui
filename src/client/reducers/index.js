import { SWITCH_SEARCH_BUTTON, FRUIT_LOADED, SEARCH, FILTER, FACETED_SEARCH, ADD_TO_CARD, CELL_FRUIT_LOADED } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case CELL_FRUIT_LOADED: // eslint-disable-line
      const newFruits = [...state.fruits];
      newFruits[action.index] = action.fruit;
      return {
        ...state,
        fruits: newFruits,
      };
    case SEARCH:
      return {
        ...state,
        searchValue: action.value,
      };
    case SWITCH_SEARCH_BUTTON:
      return {
        ...state,
        isSearchDisabled: !state.isSearchDisabled,
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
    case FRUIT_LOADED:
      return {
        ...state,
        fruit: action.fruit,
      };
    default:
      return state;
  }
};

export default reducer;
