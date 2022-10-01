import React, { Component } from'react';
import PropTypes from "prop-types";

import './footer.css';

import TasksFilter from '../task-filter'

export default class Footer extends Component {

  static defaultProps = {
    onClearCompleted: () => {},
    todoCount: 0,
  };
  
  static propTypes = {
    onClearCompleted: PropTypes.func,
    todoCount: PropTypes.number,
    filter: PropTypes.string,
    onFilter: PropTypes.func
  };
  

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

