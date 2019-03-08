import React, { Component } from 'react';
import './Board.css';
import Square from '../Square/Square';

class Board extends Component {
    render() {
        return (
            <div className="Board">
                <div className="squareContainer"><Square/></div>
                <div className="squareContainer"><Square/></div>
                <div className="squareContainer"><Square/></div>
                <div className="squareContainer"><Square/></div>
                <div className="squareContainer"><Square/></div>
                <div className="squareContainer"><Square/></div>
                <div className="squareContainer"><Square/></div>
                <div className="squareContainer"><Square/></div>
                <div className="squareContainer"><Square/></div>
            </div>
        );
    }
}

export default Board;
