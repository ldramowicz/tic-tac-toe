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
        squares: new Array(9).fill(0),
        currentMove: 1,
        currentPlayer: 0,
        history: [
            { squares: new Array(9).fill(null)}
        ],
    };

    // Handle bindings
    this.onSquareClick = this.onSquareClick.bind(this);
    this.onResetGame = this.onResetGame.bind(this);
    this.onUndoMove = this.onUndoMove.bind(this);
  }

  getWinner(squares) {
    for (let i = 0; i < acrossThree.length; i++) {
      const [a, b, c] = acrossThree[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
      }
    }
    return null;
  }

  onSquareClick(id) {
    //console.log("Current board state = " + this.state.squares + " " + id);

    // prevent clicking filled square and after game ends
    if (this.getWinner(this.state.squares) || this.state.squares[id]) {
        return;
    }

    let tmpHistory = this.state.history.slice(0, this.state.currentMove-1);
    let tmpSquares = this.state.squares.slice();
    let tmpCurrentPlayer = !this.state.currentPlayer;
    let tmpCurrentMove = this.state.currentMove + 1;

    tmpSquares[id] = this.state.currentPlayer ? -1 : 1;
    //console.log("tmpSquares = " + tmpSquares);

    this.setState({
        squares: tmpSquares,
        currentPlayer: tmpCurrentPlayer,
        currentMove: tmpCurrentMove,
        history: tmpHistory.concat([
            { squares: tmpSquares }
        ]),
      }, /*() => {console.log(this.state.squares, tmpCurrentPlayer, this.state.history)}*/
    );
  }

  onResetGame() {
    this.setState({
      squares: new Array(9).fill(0),
      currentPlayer: 0,
      currentMove: 1,
    });
  }

  onUndoMove() {
    //console.log("Undo");
      let tmpCurrentMove = this.state.currentMove - 1;
      if (tmpCurrentMove <= 1) {
          this.onResetGame();
          return;
      }
      //console.log(tmpCurrentMove);
    let tmpHistory = this.state.history.slice(0, -1);
    //console.log(tmpHistory, tmpHistory.length)
    let tmpCurrentPlayer = !this.state.currentPlayer;
    //console.log("tmpHistory = " + tmpHistory);

    this.setState({
        squares: tmpHistory[tmpHistory.length-1].squares,
        currentPlayer: tmpCurrentPlayer,
          currentMove: tmpCurrentMove,
          history: tmpHistory,
      }, /*() => {console.log(this.state.squares, this.state.history)}*/
    );
  }

  render() {
    const {squares, currentMove, currentPlayer} = this.state;
    const winner = this.getWinner(squares);
    //console.log("winner = " + winner);

    return (
      <div className="App">
        <Board squares={squares} onSquareClick={this.onSquareClick} />
        <Notifications currentMove={currentMove} currentPlayer={currentPlayer} winner={winner}/>
          {currentMove > 1
              ? <div>
                    <button onClick={() => this.onResetGame()}>Reset</button>
                    <button onClick={() => this.onUndoMove()}>Undo</button>
              </div>
              : ""}
      </div>
    );
  }
}

export default App;
