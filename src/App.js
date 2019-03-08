import React, { Component } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Notifications from "./components/Notifications/Notifications";

const acrossThree = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

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
    //console.log("Current board state = " + this.state.squares + " " + id);

    let tmpSquares = this.state.squares;
    let tmpCurrentPlayer = !this.state.currentPlayer;
    let tmpCurrentMove = this.state.currentMove + 1;

    //console.log("tmpSquares = " + tmpSquares);

    tmpSquares[id] = this.state.currentPlayer ? -1 : 1;
    this.setState({
        squares: tmpSquares,
        currentPlayer: tmpCurrentPlayer,
        currentMove: tmpCurrentMove
      }, () => {console.log(this.state.squares, tmpCurrentPlayer)}
    );
  }

  render() {
    const {squares, currentMove, currentPlayer} = this.state;

    return (
      <div className="App">
        <Board squares={squares} onSquareClick={this.onSquareClick} />
        <Notifications currentMove={currentMove} currentPlayer={currentPlayer}/>
      </div>
    );
  }
}

export default App;
