import {ADD_USER, ATTACH_KEYS_TO_USER, USERS_LIST} from '../actions/ActionTypes'

const users = (state = [], action) => {
  const { id, keys } = action;                 //Annoying compile rules won't let declaration exist in two mutually-exclusive case blocks.
  let { name } = action;

  console.log('Got ','action',action);
  switch (action.type) {

    case ADD_USER:
      const { requiresKeys } = action;
      return state.concat([{ name, id, keys, requiresKeys }])

    // action.keys to be attached to any user in state with flag requiresKeys==true. ( || to user with id if action.id set)
    case ATTACH_KEYS_TO_USER:
      // const { storedLocalUser } = action;
      const newState = state.slice(0);
      newState.forEach (user => {
        if (user.requiresKeys || user.id===id) {
          // if (keys) console.log('WARNIN: changing keys for user',id);
          user.keys = keys    //  NB cloning using Object.assign had nasty effects - turned string to Array-like object
                              //  Should be fine once keys is reliably an object
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
