import React, { Component } from 'react'

import { NewTaskForm } from '../NewTaskForm'
import { Footer } from '../Footer'
import { TaskList } from '../TaskList'

import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.maxId = 4
    this.createTodoItem = (label, status = 'active', id = this.maxId) => {
      this.maxId += 1
      return (timerValue = 0) => ({ label, timerValue, taskStatus: status, id, createdAt: new Date() })
    }
    this.state = {
      todoData: [
        this.createTodoItem('Completed task', 'completed')(),
        this.createTodoItem('Editing task', 'editing')(),
        this.createTodoItem('Active task')(),
      ],
      filter: 'all',
    }

    this.onComplete = (id) => {
      const { todoData } = this.state
      const newData = todoData.map((todo) => {
        if (id === todo.id) {
          todo.taskStatus = todo.taskStatus === 'active' ? 'completed' : 'active'
        }
        return todo
      })

      this.setState(() => ({
        todoData: newData,
      }))
    }

    this.onDelete = (id) => {
      const { todoData } = this.state
      const newData = todoData.filter((todo) => todo.id !== id)
      this.setState(() => ({
        todoData: newData,
      }))
    }

    this.onEdit = (id) => {
      const { todoData } = this.state
      const editedData = todoData.map((todo) => {
        if (todo.taskStatus === 'editing') todo.taskStatus = 'active'
        if (todo.id === id && todo.taskStatus !== 'completed') todo.taskStatus = 'editing'
        return todo
      })
      this.setState(() => ({
        todoData: editedData,
      }))
    }

    this.editInput = (id, value) => {
      const { todoData } = this.state
      const editedData = todoData.map((todo) => {
        if (todo.id === id) todo.label = value
        return todo
      })
      this.setState(() => ({
        todoData: editedData,
      }))
    }

    this.editSubmit = (id, value) => {
      if (value.trim() === '') {
        return
      }
      const { todoData } = this.state
      const editedData = todoData.map((todo) => {
        if (todo.id === id) todo.taskStatus = 'active'
        return todo
      })
      this.setState(() => ({
        todoData: editedData,
      }))
    }

    this.onFilterChange = (filter) => {
      this.setState({ filter })
    }

    this.filterItems = (items, filter) => {
      if (filter === 'all') {
        return items
      }
      return items.filter(({ taskStatus }) => taskStatus === filter)
    }

    this.addItem = (taskName, min, sec) => {
      if (taskName.trim() === '') {
        return
      }
      const timerValue = sec + min * 60
      const newItem = this.createTodoItem(taskName)(timerValue)
      this.setState(({ todoData }) => {
        const newData = [...todoData, newItem]
        return {
          todoData: newData,
        }
      })
    }

    this.onClearCompleted = () => {
      const { todoData } = this.state
      const filteredData = todoData.filter(({ taskStatus }) => taskStatus !== 'completed')
      this.setState(() => ({
        todoData: filteredData,
      }))
    }
  }

  render() {
    const { todoData, filter } = this.state
    const doneCount = todoData.filter((item) => item.taskStatus === 'completed').length
    const todoCount = todoData.length - doneCount
    const visibleItems = this.filterItems(todoData, filter)
    return (
      <section className="todoapp">
        <NewTaskForm onItemAdded={this.addItem} />
        <section className="main">
          <TaskList
            todos={visibleItems}
            onComplete={this.onComplete}
            onDelete={this.onDelete}
            onEdit={this.onEdit}
            editInput={this.editInput}
            editSubmit={this.editSubmit}
          />
          <Footer
            filter={filter}
            onClearCompleted={this.onClearCompleted}
            onFilter={this.onFilterChange}
            todoCount={todoCount}
          />
        </section>
      </section>
    )
  }
}
