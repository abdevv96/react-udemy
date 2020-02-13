import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = () => {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: '28' },
      { name: 'Manu', age: '27' }
    ]
  });

  const [ showPersonsState, setShowPersonsState ] = useState(true);
  
  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: '28' },
        { name: 'Manu', age: '27' }
      ]
    })
  }

  const toggleShowPersons = () => {
    setShowPersonsState(!showPersonsState);
  }

  const changeName = (event) => {
    setPersonsState({
      persons: [
        { name: personsState.persons[0].name, age: '28' },
        { name: event.target.value, age: '27' }
      ]
    })
  }
  
  const btnStyle = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '2px solid lightgray',
    padding: '8px',
    cursor: 'pointer',
    marginLeft: '5px'
  }

  return (
      <div className="App">
          <h1>Hi, This is a react app !</h1>
          <button onClick={ () => switchNameHandler('Maxim') } style={btnStyle} >Switch Name</button>
          <button onClick={ toggleShowPersons } style={btnStyle} >Show / Hide Persons</button>
        {
          showPersonsState ?
            <div>
              <Person name={personsState.persons[0].name} age={personsState.persons[0].age} > I Like Components ..</Person>
              <Person name={personsState.persons[1].name} age={personsState.persons[1].age}  clickHandler={switchNameHandler.bind(this, 'Maxi')} changeNameHandler={changeName} />
            </div> : null
        }

       
      </div>
  );
  
    // compiles to
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, This is a react app !'));

}

export default app;
