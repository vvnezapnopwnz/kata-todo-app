import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './TaskFilter.css'

export default class TaskFilter extends Component {
  state = {
    buttons: [
      { name: 'all', label: 'All' },
      { name: 'active', label: 'Active' },
      { name: 'completed', label: 'Completed' },
    ],
  }

  render() {
    const { onFilter, filter } = this.props
    const { buttons } = this.state
    const filterButtons = buttons.map(({ name, label }) => {
      const isActive = name === filter
      const classNames = isActive ? 'selected' : ''
      return (
        <li key={name}>
          <button type="button" onClick={() => onFilter(name)} className={classNames}>
            {label}
          </button>
        </li>
      )
    })

    return <ul className="filters">{filterButtons}</ul>
  }
}
TaskFilter.defaultProps = {
  filter: 'all',
  onFilter: () => {},
}

TaskFilter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
}
