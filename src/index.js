import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Chance from 'chance';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import reducers from './reducers';
// import { addUser } from './actions';
import setupSocket from './sockets';
import { handleNewMessage, initialiseUser } from './sagas';


const protocol = 'ws:';
const serverIp = 'localhost';
const port = '8989';
const url = `${protocol}//${serverIp}:${port}`;
// const url = 'ws://localhost:8989';

const sagaMiddleware = createSagaMiddleware();
const username = new Chance().first();
const localUser = {username};

/// mutate localUser here ?  //


//redux-dev-tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancers = compose (
//   window.devToolsExtension ? window.devToolsExtension() : store => store ;
// )

const store = createStore (
  reducers,
  composeEnhancers (applyMiddleware (sagaMiddleware))   //ideally add r-devtools-xn-compose in a more legible way!
);

const socket = setupSocket (store.dispatch, localUser, url);
sagaMiddleware.run (handleNewMessage, { socket, username });
sagaMiddleware.run (initialiseUser);

// store.dispatch (addUser('You'));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root'));
registerServiceWorker();
