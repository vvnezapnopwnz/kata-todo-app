import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNowStrict, format, addSeconds } from 'date-fns'
import './Task.css'

export default class Task extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      timerCount: 0,
      timerStatus: false,
    }
    this.onPlayClick = () => {
      const { timerStatus } = this.state
      if (timerStatus === false) {
        this.setState({ timerStatus: true })
        this.interval = setInterval(() => {
          const { timerCount } = this.state
          const newTimerValue = timerCount + 1
          this.setState({ timerCount: newTimerValue })
        }, 1000)
      }
    }

    this.onPauseClick = () => {
      const { timerStatus } = this.state
      if (timerStatus === true) {
        this.setState({ timerStatus: false })
        clearInterval(this.interval)
      }
    }

    this.formattedTime = (seconds) => {
      const helperDate = addSeconds(new Date(0), seconds)
      return format(helperDate, 'mm:ss')
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { id, taskStatus, label, onDelete, onComplete, onEdit, editInput, editSubmit, createdAt } = this.props
    const { timerCount } = this.state
    const onSubmitHandler = (event) => {
      event.preventDefault()
      editSubmit(id, label)
    }

    const taskInput =
      taskStatus === 'editing' ? (
        <form onSubmit={(event) => onSubmitHandler(event)}>
          <label className="task-edit-label" htmlFor={`task-edit-${id}`}>
            <input
              ref={(input) => input && input.focus()}
              autoFocus
              id={`task-edit-${id}`}
              type="text"
              className="edit"
              value={label}
              onChange={(event) => editInput(id, event.target.value)}
            />
          </label>
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
            <span className="timer">
              <button className="icon icon-play" type="button" onClick={() => this.onPlayClick()} />
              <button className="icon icon-pause" type="button" onClick={this.onPauseClick} />
              <span>{this.formattedTime(timerCount)}</span>
            </span>
            <span className="created">
              created {formatDistanceToNowStrict(createdAt, { includeSeconds: true, addSuffix: false })} ago
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
