import React, { Component } from'react';
import PropTypes from "prop-types";

import './task-filter.css';

export default class TasksFilter extends Component {
  static defaultProps = {
    filter: "all",
    onFilter: () => {},
  };
  
  static propTypes = {
    filter: PropTypes.string,
    onFilter: PropTypes.func,
  };

  
  state = {
    buttons: [
      { name: 'all', label: 'All' },
      { name: 'active', label: 'Active' },
      { name: 'completed', label: 'Completed' }
    ]
  }

  render () {
    const {onFilter, filter} = this.props;
    const filterButtons = this.state.buttons.map(({name, label}) => {
      const isActive = name === filter;
      const classNames = isActive ? 'selected' : '';
      return (
        <li key={name}>
        <button 
          type="button"
          onClick={() => onFilter(name)}
          className={classNames}>{label}</button>
        </li>
      );
    })

    return (
      <ul className="filters">
        {filterButtons}
      </ul>
    );
  }
}
