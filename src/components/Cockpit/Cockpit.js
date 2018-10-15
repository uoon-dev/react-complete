import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    const assinedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
        console.log(btnClass);
    }

    if (props.persons.length <= 2) {
      assinedClasses.push(classes.red)
    }
    if (props.persons.length <= 1) {
      assinedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assinedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass}
                onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;