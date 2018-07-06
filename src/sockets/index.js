import {ADD_MESSAGE, MESSAGE_RECEIVED, ADD_USER, INITIALISE_USER, USERS_LIST}  from '../actions/ActionTypes';
import {addMessage, addUser, messageReceived, populateUsersList} from '../actions';

const setupSocket = (dispatch, localUser, url) => {
  const socket = new WebSocket(url);

  socket.onopen = () => {
    console.log('We have connection');
    socket.send(JSON.stringify({
      type: INITIALISE_USER,
      name: localUser.username
    }))
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case ADD_MESSAGE:
        dispatch (messageReceived (data.message, data.author));
        break
      case ADD_USER:
        dispatch (addUser (data.name));
        break
      case USERS_LIST:
        dispatch (populateUsersList (data.users));
        break
      default:
        break
    }
  };

  return socket
}

export default setupSocket
