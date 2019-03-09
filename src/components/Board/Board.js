import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import Square from '../Square/Square';

class Board extends Component {
    render() {
        const {squares, onSquareClick, winner} = this.props;
        return (
            <div className="Board">
                {squares.map((square, index) => {
                    return <div key={index} className={"squareContainer" + (winner ? " winner" : "")}>
                                <Square id={index} value={squares[index]} onSquareClick={onSquareClick} />{winner}
                            </div>
                })
                }
            </div>
        );
    }
}

Board.propTypes = {
    squares: PropTypes.array,
    onSquareClick: PropTypes.func,
    winner: PropTypes.number
};

export default Board;
