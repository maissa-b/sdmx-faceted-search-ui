import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers';

const configureStore = (initialState) =>
  createStore(
      reducer,
      initialState,
      applyMiddleware(thunk, createLogger),
    );

export default configureStore;
