const getUserById = (usersState, id, returnAnyifOne) => {
  let idx = usersState.findIndex (user => user.id===id);

  if (idx >= 0)
    return {index : idx, user: usersState[idx]}
  if (usersState.length===0) {
    console.log('WARNING - tried to find a user, but no users exist');
  }
  if (usersState.length>1) {
    console.log('Too many users to find ',id);
  }
  if (id === undefined) {
    console.log();
    return  {index : 0, user: usersState[0]}
  }
  if (returnAnyifOne) {
    console.log(`WARNING - user didn't match ${id}, but returning them anyway`);
    return  {index : 0, user: usersState[0]}
  }
  return {index : -1, user: {}}
}

export { getUserById }
