import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const configureStore = (initialState) =>
  createStore(
      reducer,
      initialState,
      applyMiddleware(thunk, createLogger),
    );

export default configureStore;
