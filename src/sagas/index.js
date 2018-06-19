import { takeEvery, put } from 'redux-saga/effects';
import { ADD_MESSAGE, INITIALISE_USER, CREATE_USER_FROM_KEYS} from '../actions/ActionTypes';
import { genKeys } from '../logic/key-helpers';

const existsLocal = () => false;
const retrieveLocal = ()=> {};


const handleNewMessage = function* handleNewMessage (params) {
  yield takeEvery (ADD_MESSAGE, (action) => {
    action.author = params.username;
    params.socket.send (JSON.stringify(action));
  })
};


const initialiseUser = function* initialiseUser () {
  let keys;
  let count=0;

  yield takeEvery (INITIALISE_USER, function* (action) {
    console.log('action: ',action);
      const storedLocalUser = Object.assign(action.storedLocalUser);

    if (storedLocalUser.keys) {
      console.log('got keys already. No waiting on a Generator for me');
      keys = storedLocalUser.keys;
      delete storedLocalUser.keys;
    }
      else {
        let t0 = new Date();
        keys =  genKeys (null, t0);
        // setTimeout ( ()=> {
        //   console.log(count +': after a wait, those keys look like ',keys);
        // }, 50);
      };
    yield put ({ type: 'CREATE_USER_FROM_KEYS', keys, storedLocalUser});

  });
};


const userFromKeys = function* userFromKeys () {

  yield takeEvery (CREATE_USER_FROM_KEYS, function* (action) {
    const { name, keys, chain } = action.storedLocalUser;            ///dropped extra params originally from iU generator (above)
    yield put ({ type: 'STORE_LOCAL_USER', keys, name, chain });
    yield put ({ type: 'ADD_USER', name });

  });
};


// // how to pass params into rootSaga using sagaMiddleware.run ?
// const rootSaga = function* rootSaga () {
//   yield [handleNewMessage, initialiseUser];
// };


export { handleNewMessage, initialiseUser, userFromKeys }
