import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

class Notifications extends Component {
    render() {
        const {currentMove, currentPlayer, winner} = this.props;
        return (
            <div className="Notifications">

                {winner ?
                    <div>Winner: {!currentPlayer ? "O" : "X"} in {currentMove-1} turns.</div> :
                    <div>
                        <div>Turn #{currentMove}</div>
                        <div>Player to play:  {currentPlayer ? "O" : "X"}</div>
                    </div>
                }
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
