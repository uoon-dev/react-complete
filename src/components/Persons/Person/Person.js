import React, { Component } from 'react';
import classes from './Person.module.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
  }

  render () {
    console.log('[Person.js] Inside render()');
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input onChange={this.props.changed} value={this.props.name}></input>
      </div>
    )
  }
} 

export default Person;