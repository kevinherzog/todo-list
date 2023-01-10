import React, { Component } from 'react';
import Masterlist from './Masterlist'
import Tasks from './Tasks'

class App extends Component {
  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <h2>Today</h2>
        <table></table>
        <h2>Masterlist</h2>
        <table></table>
      </div>
    );
  }
}

export default App;