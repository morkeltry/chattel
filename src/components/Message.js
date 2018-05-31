
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
  //static not implemented in full in ES6. So this syntax thanks to Babel!
  static propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  };

  render () {
    return <p>
        <i>{this.props.author}</i>: {this.props.message}
      </p>
  };
}

export default Message
