import { connect } from 'react-redux';
import AddMessageComponent from '../components/AddMessage';
import {addMessage} from '../actions';

const mapStateToProps = state => ({localUserName: state.users[0]? state.users[0].name : null});

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch (addMessage (message, author))
  }
});

export const AddMessage = connect (
    mapStateToProps,
    mapDispatchToProps
  ) (AddMessageComponent)
