
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMessage extends Component {
  //static not implemented in full in ES6. So this syntax thanks to Babel!
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  // * TODO measure overhead of repeatedly rebinding input=node each render
  // versus defining 'input' and function on class.

  render () {
    let input;
    return <section id="new-message">
      <input
        onKeyPress = { e => {
          if (e.key === 'Enter') {
            this.props.dispatch (input.value, 'Some User')
            input.value = ''
        }}}
        type = "text"
        ref = {node => {input = node}}    // *see above
      />

     Messages list</section>
  };

}

export default AddMessage;
