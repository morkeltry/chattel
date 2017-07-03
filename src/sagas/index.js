import Chance from 'chance';
import { takeEvery, put } from 'redux-saga/effects';
import { ADD_MESSAGE, ADD_USER, INITIALISE_USER, ATTACH_KEYS_TO_USER} from '../actions/ActionTypes';
import { genKeys } from '../logic/key-helpers';
// import { getUserById } from '../logic/user-helpers';

const existsLocal = () => false;
const retrieveLocal = ()=> {};


const handleNewMessage = function* handleNewMessage (params) {
  yield takeEvery (ADD_MESSAGE, (action) => {
    action.author = params.username;
    params.socket.send (JSON.stringify(action));
  })
};


const initialiseUser = function* initialiseUser () {
  let keys ;
  let count=0;

  yield takeEvery (INITIALISE_USER, function* (action) {
    const storedLocalUser = Object.assign ({}, action.storedLocalUser);
    console.log('action: ',action);
    console.log(action.name ? 'name: '+action.name : 'No name passed to action'+ action.storedLocalUser? 'action.storedLocalUser.name: '+action.storedLocalUser.name : 'AND action.storedLocalUser has no name');
    let name = action.name || (action.storedLocalUser && action.storedLocalUser.name) ? action.storedLocalUser.name : new Chance().first();
    console.log('name: ',name);


    yield put ({ type: 'ADD_USER', name , requiresKeys: true});
    if (action.storedLocalUser && action.storedLocalUser.keys) {
      console.log('got keys already. No waiting on a Generator for me');
    }
      else {
        let t0 = new Date();
        keys =  genKeys (null, t0);
        // setTimeout ( ()=> {
        //   console.log(count +': after a wait, those keys look like ',keys);
        // }, 50);
        yield put ({ type: 'ATTACH_KEYS_TO_USER', keys});     // (THE NEXT) TODO: this is put-ting the Promise of keys before keys resolves.
        storedLocalUser.keys = storedLocalUser;     // HUH?
      };

    // if the action came with a storedLocalUser, then put() the new storedLocalUser, (modified with new keys if necessary)
    // if not, then put() the earlier added user, which will already have keys attached.
    if (action.storedLocalUser)
      yield put ({ type: 'STORE_LOCAL_USER', storedLocalUser })
    else
      yield put ({ type: 'STORE_LOCAL_USER', id : {TODO: 'get the added user'} });
  });
};


const userFromKeys = function* userFromKeys () {
};


// // how to pass params into rootSaga using sagaMiddleware.run ?
// const rootSaga = function* rootSaga () {
//   yield [handleNewMessage, initialiseUser];
// };


export { handleNewMessage, initialiseUser, userFromKeys }
