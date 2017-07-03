
// UNUSED


import {ATTACH_KEYS_TO_USER} from '../actions/ActionTypes'

const userFromKeys = (state = [], action) => {
  switch (action.type) {
    case ATTACH_KEYS_TO_USER: {
      let { index, user } = getUserById (state, action.id);
      user = Object.assign ({},user);                    //gotta be pure, yo~
      const { name, keys } = user;
      const oldKeys = keys;
      const newKeys = action.keys;

      if (index === -1)
        throw new Error (`Could not put keys ${action.keys} to use - no candidate for user ${action.id}`);
      if (oldKeys && (oldKeys.pub != newKeys.pub))
        console.log('WARNING! Old keys are being replaced');

      user.keys = newKeys;
      return state.splice(0,index) .concat(user) .concat(state.slice(index+1));       /// .splice would mutate

    }
    default:
      return state
  }
}

export default keys
