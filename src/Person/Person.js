import React from 'react'
import './Person.css'

const person = (props) => {

        return (
            <div onClick={props.clickHandler} className="Person">
                <p>Hello, my name is {props.name}, I am {props.age} YO !</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changeNameHandler} value={props.name}></input>
            </div>)
}

export default person;