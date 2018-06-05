import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Chance from 'chance';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import reducers from './reducers';
// import { addUser } from './actions';
import setupSocket from './sockets';
import handleNewMessage from './sagas';

const url = 'ws://localhost:8989';

const sagaMiddleware = createSagaMiddleware();
const username = new Chance().first();
const store = createStore (
  reducers,
  applyMiddleware (sagaMiddleware)
);

const socket = setupSocket (store.dispatch, username, url);
sagaMiddleware.run (handleNewMessage, { socket, username });

// store.dispatch(addUser('You'));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root'));
registerServiceWorker();
