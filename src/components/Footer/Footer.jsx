import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './Footer.css'

import { TaskFilter } from '../TaskFilter'

export default class Footer extends PureComponent {
  render() {
    const { onFilter, filter, todoCount, onClearCompleted } = this.props
    return (
      <footer className="footer">
        <span className="todo-count">{todoCount} items left</span>
        <TaskFilter filter={filter} onFilter={onFilter} />
        <button onClick={onClearCompleted} className="clear-completed" type="button">
          Clear completed
        </button>
      </footer>
    )
  }
}
Footer.defaultProps = {
  onClearCompleted: () => {},
  todoCount: 0,
  filter: 'all',
  onFilter: () => {},
}

Footer.propTypes = {
  onClearCompleted: PropTypes.func,
  todoCount: PropTypes.number,
  filter: PropTypes.string,
  onFilter: PropTypes.func,
}
