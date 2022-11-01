import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NewTaskForm.css'

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    const initialState = {
      taskName: '',
      min: '',
      sec: '',
    }
    this.state = initialState
    this.validateField = ({ name, value }) => {
      switch (name) {
        case 'min':
          return { name, value: value !== '' ? Math.min(value, 9999) : '' }
        case 'sec':
          return { name, value: value !== '' ? Math.min(value, 59) : '' }
        default:
          return { name, value }
      }
    }

    this.handleUserInput = (event) => {
      const { name, value } = this.validateField(event.target)
      this.setState({ [name]: value })
    }

    this.onSubmit = (event) => {
      event.preventDefault()
      const { taskName, min, sec } = this.state
      const { onItemAdded } = this.props
      if (min === '' && sec === '') {
        return
      }
      onItemAdded(taskName, +min || 0, +sec || 0)
      this.setState(this.initialState)
    }
  }

  render() {
    const { taskName, min, sec } = this.state
    return (
      <div className="header">
        <h1>todos</h1>
        <form className="new-todo-form" onSubmit={this.onSubmit}>
          <label htmlFor="task-add">
            <input
              onChange={(event) => this.handleUserInput(event)}
              id="task-add"
              name="taskName"
              value={taskName}
              className="new-todo"
              placeholder="Task"
              autoFocus
            />
          </label>
          <label htmlFor="task-add-min">
            <input
              onChange={(event) => this.handleUserInput(event)}
              value={min}
              name="min"
              id="task-add-min"
              className="new-todo-form__time"
              placeholder="Min"
              type="number"
            />
          </label>
          <label htmlFor="task-add-sec">
            <input
              onChange={(event) => this.handleUserInput(event)}
              value={sec}
              name="sec"
              id="task-add-sec"
              className="new-todo-form__time"
              placeholder="Sec"
              type="number"
            />
          </label>
          <button className="new-todo-form__submit" type="submit" />
        </form>
      </div>
    )
  }
}
NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func.isRequired,
}
