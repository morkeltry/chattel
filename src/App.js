import React, { Component } from 'react';

import Sidebar from './components/Sidebar';
import MessagesList from './components/MessagesList';
import AddMessage from './components/AddMessage';

import './App.css'

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    )
  }
}

export default App
