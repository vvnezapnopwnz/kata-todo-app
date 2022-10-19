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
        <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
          <label className="task-edit-label" htmlFor="task-add">
            <input
              id="task-add"
              value={label}
              onChange={this.onLabelChange}
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
            />
          </label>
        </form>
      </div>
    )
  }
}
NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func.isRequired,
}
