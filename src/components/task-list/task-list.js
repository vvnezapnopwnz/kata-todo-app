import React from 'react';

import Task from '../task';
import './task-list.css';

const TaskList = ({ todos }) => {

  const elements = todos.map((item) => {
    const { id, status,...itemProps } = item;
    return (
      <li key={id} className={status}>
        <Task {...itemProps } />
    </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TaskList;
