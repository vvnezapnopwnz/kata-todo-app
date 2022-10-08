import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import './task.css'

export default class Task extends PureComponent {
  render() {
    const { id, taskStatus, label, onDelete, onComplete, onEdit, editInput, editSubmit, createdAt } = this.props

    const onSubmitHandler = (e) => {
      e.preventDefault()
      editSubmit(id)
    }

    const taskInput =
      taskStatus === 'editing' ? (
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <input type="text" className="edit" value={label} onChange={(e) => editInput(id, e.target.value)} />
        </form>
      ) : (
        ''
      )

    return (
      <li className={taskStatus}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={taskStatus === 'completed'}
            onChange={() => onComplete(id)}
            id={`task-${id}`}
          />
          <label htmlFor={`task-${id}`}>
            <span className="description">{label}</span>
            <span className="created">
              created {formatDistanceToNow(createdAt, { includeSeconds: true, addSuffix: true })} ago
            </span>
          </label>
          <button className="icon icon-edit" onClick={() => onEdit(id)} type="button" />
          <button className="icon icon-destroy" type="button" onClick={() => onDelete(id)} />
        </div>
        {taskInput}
      </li>
    )
  }
}
Task.propTypes = {
  id: PropTypes.number.isRequired,
  taskStatus: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  editInput: PropTypes.func.isRequired,
  editSubmit: PropTypes.func.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
}
