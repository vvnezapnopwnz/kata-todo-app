import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './NewTaskForm.css'

export default function NewTaskForm(props) {
  const { onItemAdded } = props
  const [label, setLabel] = useState('')
  const onLabelChange = (event) => {
    const { value } = event.target
    setLabel(value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    onItemAdded(label)
    setLabel('')
  }

  return (
    <div className="header">
      <h1>todos</h1>
      <form className="new-todo-form" onSubmit={onSubmit}>
        <label htmlFor="task-add">
          <input
            id="task-add"
            value={label}
            onChange={onLabelChange}
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
NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func.isRequired,
}
