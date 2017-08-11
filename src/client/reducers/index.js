import { combineReducers } from 'redux';
import message from './message';
import dataflows from './dataflows';

const reducer = combineReducers({
  message,
  dataflows,
});

export default reducer;
