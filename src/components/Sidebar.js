
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InitialiseButton } from '../containers/InitialiseButton';
import { KeyOptions } from '../containers/KeyOptions';
// import Button from './Button';
// import Button from './Button';
// import Button from './Button';
// import Button from './Button';

import './Sidebar.css';

class Sidebar extends Component {
  //static not implemented in full in ES6. So this syntax thanks to Babel!
  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired
  };

  render () {
    const usersList = this.props.users;
    return <aside id="sidebar" className="sidebar">
      <div>
        <ul>
          { Array.isArray (usersList) ?             // Ugliness for async testing - remove if poss!
              usersList.map(user => (
                <li key={user.id}>{user.name}</li>
              ))
              : null
          }
        </ul>
      </div>
      <div>
        <InitialiseButton />
        <KeyOptions />
      </div>
    </aside>
  };

}

export default Sidebar;
