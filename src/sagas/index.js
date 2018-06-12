import { takeEvery, put } from 'redux-saga/effects'
import { ADD_MESSAGE, INITIATE_USER, CREATE_USER_FROM_KEYS} from '../actions/ActionTypes'

const existsLocal = false;
const retrieveLocal = ()=> {};

const handleNewMessage = function* handleNewMessage (params) {
  yield takeEvery (ADD_MESSAGE, (action) => {
    action.author = params.username;
    params.socket.send (JSON.stringify(action));
  })
};

const genKeys = seed => {
  let keys= {
    public : 'supersecret'
  }
  if (seed) {
    keys.public = seed;
    // do reseed
  }
  return new Promise ( (resolve, reject) => {
    setTimeout ( ()=> {
      keys.private = keys.public+'...sssh!';
      resolve (keys);
    }, 500);
  })
}

const initiateUser = function* initiateUser (params) {
  let keys;

  yield takeEvery (INITIATE_USER, function* (action) {
    console.log('>>>>>>');
    console.log('Generator params: ',params);
    console.log('action: ',action);
    console.log('<<<<<<');
    if (existsLocal) retrieveLocal()
      else {
        keys = genKeys(action.seed);
      };
    yield put ({ type: 'CREATE_USER_FROM_KEYS', keys, params});

  });
};



// // how to pass params into rootSaga using sagaMiddleware.run ?
// const rootSaga = function* rootSaga () {
//   yield [handleNewMessage, initiateUser];
// };


export { handleNewMessage, initiateUser }
