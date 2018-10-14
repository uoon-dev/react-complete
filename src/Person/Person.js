import React from 'react';
import classes from './Person.modules.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input onChange={props.changed} value={props.name}></input>
    </div>
  )
}

export default person;