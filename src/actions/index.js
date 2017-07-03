import {ADD_MESSAGE, MESSAGE_RECEIVED, ADD_USER, INITIALISE_USER, ATTACH_KEYS_TO_USER, USERS_LIST}  from './ActionTypes';

let messageId = 0;
let userId = 0;

const addMessage = (message, author) => ({
  type: ADD_MESSAGE,
  id: messageId++,
  message,
  author
});

const addUser = name => ({
  type: ADD_USER,
  id: userId++,
  name
});

const initialiseUser = (storedLocalUser = {} , name) => ({
  type: INITIALISE_USER,
  storedLocalUser : storedLocalUser || {},                    /// Why is default assign in params not being picked up?
  name
});

const messageReceived = (message, author) => ({
  type: MESSAGE_RECEIVED,
  id: messageId++,
  message,
  author
});

const populateUsersList = users => ({
  type: USERS_LIST,
  users
});

export {addMessage, addUser, initialiseUser, messageReceived, populateUsersList}
