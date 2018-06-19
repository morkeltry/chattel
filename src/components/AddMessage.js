
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AddMessage.css';

class AddMessage extends Component {
  //static not implemented in full in ES6. So this syntax thanks to Babel!
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    localUserName : PropTypes.string
  };

  // * TODO measure overhead of repeatedly rebinding input=node each render
  // versus defining 'input' and function on class.

  render () {
    let input;
    let ownName = this.props.localUserName;
    ownName = ownName? ownName+"(That's you)" : 'You'
    return <section id="new-message">
      <input
        onKeyPress = { e => {
          if (e.key === 'Enter') {
            this.props.dispatch (input.value, ownName)
            input.value = ''
        }}}
        type = "text"
        ref = {node => {input = node}}    // *see above
      />

     Messages list</section>
  };

}

export default AddMessage;
