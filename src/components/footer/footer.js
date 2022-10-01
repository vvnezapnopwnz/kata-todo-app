import React, { Component } from'react';
import './footer.css';

import TasksFilter from '../task-filter'

export default class Footer extends Component {


  render () {
    const {onFilter, filter, todoCount, onClearCompleted } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{todoCount} items left</span>
        < TasksFilter 
        filter ={filter}
        onFilter={onFilter}/>
        <button onClick = { onClearCompleted } className="clear-completed">Clear completed</button>
      </footer>
    );
  };

}

