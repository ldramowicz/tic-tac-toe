import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

class Notifications extends Component {
    render() {
        const {currentMove, currentPlayer} = this.props;
        return (
            <div className="Notifications">
                <p>Move #{currentMove}</p>
                <p>Next to play: {currentPlayer ? "O" : "X"}</p>
            </div>
        );
    }
}

Notifications.propTypes = {
    currentMove: PropTypes.number,
    currentPlayer: PropTypes.number
};

export default Notifications;
