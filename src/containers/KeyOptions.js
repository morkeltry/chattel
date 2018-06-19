
import { connect } from 'react-redux';
import KeyOptionsComponent from '../components/KeyOptions';
import {  } from '../actions';

const mapStateToProps = state => ({name: state.name, keys: state.keys});

const mapDispatchToProps = dispatch => ({
  dispatch: (storedLocalUser) => {
    dispatch () /// (whatevs (params))
  }
});

export const KeyOptions = connect(
    mapStateToProps,
    mapDispatchToProps
  ) (KeyOptionsComponent)
