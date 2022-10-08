import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './new-task-form.css'

export default class NewTaskForm extends Component {
  state = {
    label: '',
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
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
          <input
            value={label}
            onChange={this.onLabelChange}
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
          />
        </form>
      </div>
    )
  }
}
NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func.isRequired,
}
