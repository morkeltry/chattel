
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <ul>
        {usersList.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </aside>
  };

}

export default Sidebar;
