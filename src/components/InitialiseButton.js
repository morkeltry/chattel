
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './InitialiseButton.css';

class InitialiseButton extends Component {
  //static not implemented in full in ES6. So this syntax thanks to Babel!
  static propTypes = {
    self: PropTypes.shape({
        name: PropTypes.string,
        keys: PropTypes.shape ({
          priv : PropTypes.string.isRequired,
          pub : PropTypes.string,
        }).isRequired
      })
  };

  fireInitialise (dispatch) {
    console.log( ('__________________'));
    console.log( ('Clicked initialise'));
    // console.log('will dispatch using: ',dispatch);
    const storedLocalUser = localStorage.getItem('localUser');
    console.log('storedLocalUser:',storedLocalUser);
    dispatch (storedLocalUser);
  }

  render () {
    console.log('From localStorage:',this.props.self, this.props.self ? '=> No Init Button for you' : '- rendering Init Button');
    return this.props.self?
      null
    :
      <div>
        <button
          type= "button" className= "buttons__initialise"
          onClick= {()=>this.fireInitialise (this.props.dispatch)}>
          BANG </button>
      </div>
  };

}

export default InitialiseButton;
