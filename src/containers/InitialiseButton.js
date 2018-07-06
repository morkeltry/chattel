import { connect } from 'react-redux';
import InitialiseButtonComponent from '../components/InitialiseButton';
import {initialiseUser} from '../actions';

const mapStateToProps = state => (
  {users: state.users, self: state.self});

const mapDispatchToProps = dispatch => ({
  dispatch: (storedLocalUser) => {
    dispatch (initialiseUser (storedLocalUser))
  }
});

export const InitialiseButton = connect(
    mapStateToProps,
    mapDispatchToProps
  ) (InitialiseButtonComponent)
