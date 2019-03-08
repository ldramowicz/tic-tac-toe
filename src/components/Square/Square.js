import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Square.css';

class Square extends Component {
    render() {
        const {id, value, onSquareClick} = this.props;
        let val = "";
        console.log("val = " + val)
        switch(value) {
            case 1:
                val = "X";
                break;
            case -1:
                val = "O";
                break;
            default:
                val = "";
        }
        return (
            <div className="Square" onClick={() => onSquareClick(id)}>
                    {val}
            </div>
        );
    }
}

Square.propTypes = {
    id: PropTypes.number,
    value: PropTypes.number,
    onSquareClick: PropTypes.func
};

export default Square;
