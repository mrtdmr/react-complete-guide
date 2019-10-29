import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 25 }
        ]
    });
    const [otherState, setOtherState] = useState('some other value');
    console.log(personsState, otherState);
    const switchNameHandler = () => {
        //console.log('Was clicked');
        //DO NOT DO THIS! this.state.persons[0].name = 'Maximilian';
        setPersonsState({
            persons: [
                { name: 'Maximlian', age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 28 }
            ]
        });
        setOtherState('xxx');
    };

    return (
        <div className='App'>
            <h1>Hi, I'm a React App</h1>
            <p>It works.</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            {/*
                    https://reactjs.org/docs/events.html#supported-events
                    */}
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
            />
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
            >
                My hobbies : Racing
            </Person>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}
            />
        </div>

        // React.createElement(
        //     'div',
        //     { className: 'App' },
        //     React.createElement('h1', null, "Hi, I'm a React App")
        // )
    );
};

export default app;
