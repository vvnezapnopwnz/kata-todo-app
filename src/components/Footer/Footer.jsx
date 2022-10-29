import React from 'react'
import PropTypes from 'prop-types'

import './Footer.css'

import { TaskFilter } from '../TaskFilter'

export default function Footer(props) {
  const { onFilter, filter, todoCount, onClearCompleted } = props

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
