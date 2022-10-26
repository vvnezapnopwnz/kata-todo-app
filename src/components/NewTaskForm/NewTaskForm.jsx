import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NewTaskForm.css'

export default class NewTaskForm extends Component {
  state = {
    label: '',
  }

  onLabelChange = (event) => {
    const { value } = event.target
    this.setState({
      label: value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const { label } = this.state
    const { onItemAdded } = this.props
    onItemAdded(label)
    this.setState({ label: '' })
  }

  render() {
    const { label } = this.state
    return (
      <div className="header">
        <h1>todos</h1>
        <form className="new-todo-form" onSubmit={this.onSubmit}>
          <label htmlFor="task-add">
            <input
              id="task-add"
              value={label}
              onChange={this.onLabelChange}
              className="new-todo"
              placeholder="Task"
              autoFocus
            />
          </label>
          <label htmlFor="task-add-min">
            <input id="task-add-min" className="new-todo-form__time" placeholder="Min" />
          </label>
          <label htmlFor="task-add-sec">
            <input id="task-add-sec" className="new-todo-form__time" placeholder="Sec" />
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
