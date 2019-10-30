import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';
class App extends Component {
    state = {
        persons: [
            { id: 1, name: 'Max', age: 28 },
            { id: 2, name: 'Manu', age: 29 },
            { id: 3, name: 'Stephanie', age: 25 }
        ],
        otherState: 'some other value',
        userName: 'Murat',
        showPersons: false,
        text: '',
        textLength: 0
    };
    /*
    switchNameHandler = newName => {
        //console.log('Was clicked');
        //DO NOT DO THIS! this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 28 }
            ]
        });
    };
    */
    deletePersonHandler = personIndex => {
        //const persons = this.state.persons.slice; // Copies the array. Arrays are reference types.
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };
    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => p.id === id);
        //const person = Object.assign({}, this.state.persons[personIndex]);
        const person = { ...this.state.persons[personIndex] };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons: persons
        });
    };
    getTextLengthHandler = event => {
        const text = event.target.value;
        const length = text.length;
        this.setState({ text: text, textLength: length });
    };
    userNameChanged = event => {
        this.setState({ userName: event.target.value });
    };
    togglePersonsHandler = () => {
        /*this.state.showPersons
            ? this.setState({ showPersons: false })
            : this.setState({ showPersons: true });*/
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };
    deleteCharHandler = index => {
        const charList = this.state.text.split('');
        charList.splice(index, 1);
        const updatedText = charList.join('');
        this.setState({ text: updatedText });
    };
    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        //<button onClick={() => this.switchNameHandler('Maximilian')}></button>

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={event =>
                                    this.nameChangedHandler(event, person.id)
                                }
                            />
                        );
                    })}
                    {/** <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                    />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'Max!')}
                        changed={this.nameChangedHandler}
                    >
                        My hobbies : Racing
                    </Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                    />*/}
                </div>
            );
        }
        const charList = this.state.text.split('').map((ch, index) => {
            return (
                <Char
                    char={ch}
                    key={index}
                    clicked={() => this.deleteCharHandler(index)}
                />
            );
        });
        return (
            <div className='App'>
                <h1>Hi, I'm a React App</h1>
                <p>It works.</p>
                <button style={style} onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </button>
                {/*
                    https://reactjs.org/docs/events.html#supported-events
                    */}
                {/*this.state.showPersons ? (
                    <div>
                        <Person
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}
                        />
                        <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                            click={this.switchNameHandler.bind(this, 'Max!')}
                            changed={this.nameChangedHandler}
                        >
                            My hobbies : Racing
                        </Person>
                        <Person
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age}
                        />
                    </div>
                ) : null*/}
                {persons}
                <p>
                    <input
                        type='text'
                        onChange={this.getTextLengthHandler}
                        value={this.state.text}
                    ></input>
                </p>
                <p>
                    The length of text you have entered is{' '}
                    {this.state.text.length} characters.
                </p>
                <p>
                    <Validation textLength={this.state.text.length} />
                </p>
                {charList}
                {/**
                    <UserInput
                    changed={this.userNameChanged}
                    currentName={this.state.userName}
                /> 
                    <UserOutput userName={this.state.userName} />
                <UserOutput userName={this.state.userName} />
                <UserOutput userName={this.state.userName} />
                */}
            </div>
            // React.createElement(
            //     'div',
            //     { className: 'App' },
            //     React.createElement('h1', null, "Hi, I'm a React App")
            // )
        );
    }
}

export default App;
