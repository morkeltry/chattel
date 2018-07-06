import { combineReducers } from 'redux';
import messages from './messages';
import users from './users';
import localUser from './localUser';

const reducers = combineReducers({
  messages,
  users,
  localUser,
  actionCount : (state)=>state ? [state[0]+1] : [1]

});

export default reducers
