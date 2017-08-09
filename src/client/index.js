import '@blueprintjs/core/dist/blueprint.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store';

import './index.css';
import { initialState } from './store/data';

const store = configureStore(initialState);

// const dispatcher = () => store.dispatch(loadFruit());

const root = (
  <Provider store={store}>
    <App />
  </Provider>
);

const mountNode = document.getElementById('root');

render(root, mountNode);
