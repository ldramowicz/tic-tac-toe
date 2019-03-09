import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

class Notifications extends Component {
    render() {
        const {currentMove, currentPlayer, winner} = this.props;
        let feedback = '';
        if (winner) {
            feedback = <div>Winner: {!currentPlayer ? "O" : "X"} in {currentMove-1} turns.</div>
        } else if (currentMove === 10) {
            feedback = <div>It's a tie, no winner.</div>
        } else {
            feedback = <div>
                            <div>Turn #{currentMove}</div>
                            <div>Player to play:  {currentPlayer ? "O" : "X"}</div>
                        </div>
        }
        return (
            <div className="Notifications">
                {feedback}
            </div>
        );
    }
}

Notifications.propTypes = {
    currentMove: PropTypes.number,
    currentPlayer: PropTypes.number,
    winner: PropTypes.number
};

export default Notifications;
