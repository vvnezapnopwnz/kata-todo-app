import React from 'react';
import './new-task-form.css';

const NewTaskForm = () => {
  return (
    <div className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus/>
    </div>
  );
};

export default NewTaskForm;
