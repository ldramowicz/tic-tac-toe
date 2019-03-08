import React, { Component } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Notifications from "./components/Notifications/Notifications";

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          squares: Array(9).fill(0),
          currentMove: 0,
          currentPlayer: 0,
      };

      // Handle bindings
      this.onSquareClick = this.onSquareClick.bind(this);
  }

  onSquareClick(id) {
    console.log("Current board state = " + this.state.squares + " " + id);

  }

  render() {
      const {squares, currentMove, currentPlayer} = this.state;
    console.log(squares[1])
    return (
      <div className="App">
        <Board squares={squares} onSquareClick={this.onSquareClick} />
        <Notifications currentMove={currentMove} currentPlayer={currentPlayer}/>
      </div>
    );
  }
}

export default App;
