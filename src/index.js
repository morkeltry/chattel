import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import chat from './reducers'
import { addUser } from './actions'

const store = createStore(chat);

store.dispatch(addUser('You'));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root'));
registerServiceWorker();

export default store
