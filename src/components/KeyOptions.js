
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './KeyOptions.css';

class KeyOptions extends Component {

  static propTypes = {
    self: PropTypes.shape({
        name: PropTypes.string,
        keys: PropTypes.shape ({
          priv : PropTypes.string.isRequired,
          pub : PropTypes.string,
        })
      })
  };


  render () {
    console.log('KeyOptions props:', this.props);
    return true ?
      <div className = "keys-options">
        KEYS:

        <button> do nothing
        </button>
      </div>
    :
      null
  };

}

export default KeyOptions;
