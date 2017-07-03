import {ADD_USER, ATTACH_KEYS_TO_USER, USERS_LIST} from '../actions/ActionTypes'

const users = (state = [], action) => {   //Why do parameters become Promises if this is convered to async function ???
  const { id, keys } = action;                 //Annoying compile rules won't let declaration exist in two mutually-exclusive case blocks.
  let { name } = action;

  switch (action.type) {

    case ADD_USER:
      const { requiresKeys } = action;
      console.log('Got ',action);
      console.log('ADD_USER: state on entry: ', state);
      return state.concat([{ name, id, keys, requiresKeys }])

    // action.keys to be attached to any user in state with flag requiresKeys==true. ( || to user with id if action.id set)
    case ATTACH_KEYS_TO_USER:
      // const { storedLocalUser } = action;
      console.log('ATTACH_KEYS_TO_USER: state on entry: ', state);
      const newState = state.slice(0);

      console.log('Got ',action);
      console.log('newState (should be clone) : ', newState);
      newState.forEach (user => {
        if (user.requiresKeys || user.id===id) {
          // if (keys) console.log('WARNIN: changing keys for user',id);
          user.keys = Object.assign ({}, keys);
          delete user.requiresKeys;
        }
      })
      return newState
      //
      // // console.log('action= ',action,'storedLocalUser= ',storedLocalUser,'name= ',name);
      // if (storedLocalUser) {
      //   name = name || storedLocalUser.name || new Chance().first();
      //   /// and other storedLocalUser properties
      //
      // }
      // console.log('=> ',keys,storedLocalUser,name);
      // return state.concat([{name, keys}]);
      //

    case USERS_LIST:
      return action.users
    default:
      return state
  }
}

export default users
