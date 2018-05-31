
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

class MessagesList extends Component {
  //static not implemented in full in ES6. So this syntax thanks to Babel!
  static propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  };

  render () {
    const messagesList = this.props.messages || [];
    return <section id="messages-list">
      <ul>
      {messagesList.map (message => (
        <Message
          key={message.id}
          {...message}
        />
      ))}
      </ul>
    </section>
  };

}

export default MessagesList;
