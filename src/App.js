import React, { Component } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Notifications from "./components/Notifications/Notifications";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
        <Notifications/>
      </div>
    );
  }
}

export default App;
