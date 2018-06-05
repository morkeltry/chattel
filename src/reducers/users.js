import {ADD_USER, INITIATE_USER, USERS_LIST} from '../actions/ActionTypes'

const users = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return state.concat([{ name: action.name, id: action.id }])
    case INITIATE_USER: {
      return state.concat([{ name: action.name, id: action.id, otherProperties: action.otherProperties}])      
    }
    case USERS_LIST:
      return action.users
    default:
      return state
  }
}

export default users
