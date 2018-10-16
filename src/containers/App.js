import React, { PureComponent } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxiliary from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: "asfd1", name: 'Max', age: 28},
        { id: "asfd2", name: 'Manu', age: 29},
        { id: "asfd3", name: 'Stephanie', age: 26}
      ]
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE App.js] Inside componentWillReceiveProps()', nextProps);
  }
  
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  //   // return true;
  // }
  
  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
  }
  
  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate()');
  }

  // state = {
  //   persons: [
  //     { id: "asfd1", name: 'Max', age: 28},
  //     { id: "asfd2", name: 'Manu', age: 29},
  //     { id: "asfd3", name: 'Stephanie', age: 26}
  //   ]
  // }

  switchNameHandler = (newName) => {
    // alert('Was Clicked!');
    this.setState({
      persons: [
        { name: newName, age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 27}
      ],
      otherState: 'some other value',
      showPersons: false
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    console.log(id);
    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
      )
    }

    return (
      <Auxiliary>
        <button onClick={() => { this.setState({showPersons: true}); }}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        { persons }
      </Auxiliary>
      // <h1>Another heading</h1>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default withClass(App, classes.App);
