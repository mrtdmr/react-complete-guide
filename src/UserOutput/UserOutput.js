import React from 'react';
import './UserOutput.css';
const userOutPut = props => {
    return (
        <div className='UserOutput'>
            <p>User Name : {props.userName}</p>
            <p>I'll ve overwriten.</p>
        </div>
    );
};
export default userOutPut;
