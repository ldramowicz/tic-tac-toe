import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

class Notifications extends Component {
    render() {
        const {currentMove, currentPlayer} = this.props;
        return (
            <div className="Notifications">
                Move #{currentMove} Player: {currentPlayer}
            </div>
        );
    }
}

Notifications.propTypes = {
    currentMove: PropTypes.number,
    currentPlayer: PropTypes.number
};

export default Notifications;
