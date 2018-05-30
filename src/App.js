import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="container">
        <aside id="sidebar">Users</aside>
        <section id="main">
          <section id="messages-list">Messages</section>
          <section id="new-message">New message</section>
        </section>
      </div>
    );
  }
}

export default App;
