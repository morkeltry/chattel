

import Chance from 'chance';
import {CREATE_USER_FROM_KEYS} from '../actions/ActionTypes';

const localUser = (state = [], action) => {
  if (action.type !== CREATE_USER_FROM_KEYS)
    return state;

  const { keys, storedLocalUser } = action;
  let { name } = action;   /// needed?

  console.log('Got ',action);
  if (storedLocalUser) {
    name = name || storedLocalUser.name || new Chance().first();
    /// and other storedLocalUser properties

  }
  return state.concat([{name, keys}]);
}

///still need to ADD_USER ?

export default localUser
