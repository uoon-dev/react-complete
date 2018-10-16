import React from 'react';
import classes from './Cockpit.module.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    const assinedClasses = [];
    let btnClass = classes.Button;
    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
        console.log(btnClass);
    }

    if (props.persons.length <= 2) {
      assinedClasses.push(classes.red)
    }
    if (props.persons.length <= 1) {
      assinedClasses.push(classes.bold)
    }

    return (
        <Aux>
            <div>
                <h1>{props.appTitle}</h1>
                <p className={assinedClasses.join(' ')}>This is really working!</p>
                <button className={btnClass}
                    onClick={props.clicked}>
                    Toggle Persons
                </button>
            </div>
        </Aux>
    );
}

export default cockpit;