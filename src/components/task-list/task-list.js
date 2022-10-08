import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Task from '../task'
import './task-list.css'

export default class TaskList extends PureComponent {
  render() {
    const { todos, onDelete, onComplete, onEdit, editInput, editSubmit } = this.props

    const elements = todos.map((item) => (
      <Task
        {...item}
        onDelete={onDelete}
        onComplete={onComplete}
        onEdit={onEdit}
        editInput={editInput}
        editSubmit={editSubmit}
        key={item.id}
      />
    ))

    return <ul className="todo-list">{elements}</ul>
  }
}
TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      taskStatus: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      createdAt: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
}
