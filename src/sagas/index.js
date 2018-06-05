import { takeEvery } from 'redux-saga/effects'
import { ADD_MESSAGE } from '../actions/ActionTypes'

const handleNewMessage = function* handleNewMessage (params) {
  yield takeEvery (ADD_MESSAGE, (action) => {
    action.author = params.username;
    params.socket.send (JSON.stringify(action));
  })
};

export default handleNewMessage
