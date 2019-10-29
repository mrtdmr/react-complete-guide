import React from 'react';
const userInput = props => {
    const inputStyle = {
        border: '2px solid red'
    };
    return (
        <input
            type='text'
            style={inputStyle}
            value={props.currentName}
            onChange={props.changed}
        ></input>
    );
};
export default userInput;
