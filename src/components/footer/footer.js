import React from 'react';
import './footer.css';

import TasksFilter from '../task-filter'

const Footer = () => {

  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      < TasksFilter />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
