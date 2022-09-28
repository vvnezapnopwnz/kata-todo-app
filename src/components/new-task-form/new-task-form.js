import React, { Component } from 'react';
import './new-task-form.css';

export default class NewTaskForm extends Component {
  render () {
    return (
      <div className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus/>
      </div>
    );
  }
}
