import {NEW_TX, ADD_TX, TX_RECEIVED, TX_VALIDATED} from '../actions/ActionTypes';
import {validate} from '/logic/transactions.js';


/// State may contain a chain but no balances. So fail. State may contain balances and no chain. That's fine.

const processTx = (state = {chain: [], balances: {}}, action) => {
  switch (action.type) {
    case TX_VALIDATED:
      const oldBalances = Object.assign (state.balances);
      const newBalances = Object.assign (state.balances);    ///TODO: refactor this with balanceChanges.filter

      Object.keys (balanceChanges).forEach ( address => {
        (oldBalances[address] && (oldBalances[address] + action.balanceChanges[address]) >0 ) ?
          newBalances[address] = oldBalances[address] + action.balanceChanges[address]
        :
          throw new Error ('Doesnt add up locally - maybe started with empty balance object?')
      })
      return ({
        chain : state.chain.concat(
          {
            tx: action.tx,
            sender: action.sender
          }),
         balances : Object.assign (oldBalances, newBalances)
       })

    // case NEW_TX:
    // case ADD_TX:
    default:
      return state

}

export default processTx
