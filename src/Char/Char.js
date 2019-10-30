import React from 'react';
import './Char.css';
const Char = props => {
    return (
        <div className='Char' onClick={props.clicked}>
            {props.char}
        </div>
    );
};
export default Char;
