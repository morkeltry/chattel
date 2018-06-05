
import Chance from 'chance';
import {CREATE_USER_FROM_KEYS} from '../actions/ActionTypes';

const localUser = (state = [], action) => {
  if (action.type !== CREATE_USER_FROM_KEYS)
    return state;

  const { id, otherProperties } = action;
  let { names } = action;

  name = name || new Chance().first();




  return state.concat([{name, id, otherProperties}]);
}

export default localUser
