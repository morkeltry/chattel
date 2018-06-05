import {ADD_MESSAGE, MESSAGE_RECEIVED, ADD_USER, INITIATE_USER, USERS_LIST}  from './ActionTypes';

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

const initiateUser = name => ({
  type: INITIATE_USER,
  id: userId++,
  name,
  otherProperties : ''
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

export {addMessage, addUser, initiateUser, messageReceived, populateUsersList}
