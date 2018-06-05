import { takeEvery } from 'redux-saga/effects'
import { ADD_MESSAGE, INITIATE_USER } from '../actions/ActionTypes'

const existsLocal = false;
const retrieveLocal = ()=> {};

const handleNewMessage = function* handleNewMessage (params) {
  yield takeEvery (ADD_MESSAGE, (action) => {
    action.author = params.username;
    params.socket.send (JSON.stringify(action));
  })
};

const initiateUser = function* initiateUser (params) {
  let keys;
  
  yield takeEvery (INITIATE_USER, (action) => {
  if (existsLocal) retrieveLocal()
    else {
    /// Generate keys

    };
  });

  dispatch({ type: 'CREATE_USER_FROM_KEYS', keys });


  // yield 'you sure you want to scrap old user?'
};

export default handleNewMessage
