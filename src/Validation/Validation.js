import React from 'react';
const Validation = props => {
    const validationText =
        props.textLength < 5 ? 'Text too short.' : 'Text long enough';
    return <p>{validationText}</p>;
};
export default Validation;
