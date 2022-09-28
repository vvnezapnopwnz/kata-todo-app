import React, { Component } from 'react';

import Task from '../task';
import './task-list.css';

export default class TaskList extends Component {

  render () {
    const {
      todos,
      onDelete,
      onComplete,
      onEdit,
      editInput,
      editSubmit,
    } = this.props;

    const elements = todos.map((item) => {
      return (
        <Task
          {...item}
          onDelete={onDelete}
          onComplete={onComplete}
          onEdit={onEdit}
           editInput={ editInput}
          editSubmit={editSubmit}
          key={item.id}
        />
      );
    });
  
    return (
      <ul className="todo-list">
        { elements }
      </ul>
    );
  }

}

