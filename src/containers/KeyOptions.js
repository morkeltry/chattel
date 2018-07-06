
import { connect } from 'react-redux';
import KeyOptionsComponent from '../components/KeyOptions';
import {  } from '../actions';

const mapStateToProps = state => {
  let ownUser = state.users[0];
  return ownUser? {name: ownUser.name, keys: ownUser.keys} : {}
}

const mapDispatchToProps = dispatch => ({
  dispatch: (storedLocalUser) => {
    dispatch () /// (whatevs (params))
  }
});

export const KeyOptions = connect(
    mapStateToProps,
    mapDispatchToProps
  ) (KeyOptionsComponent)
