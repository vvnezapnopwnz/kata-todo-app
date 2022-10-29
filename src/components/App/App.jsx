import React, { useState } from 'react'

import { NewTaskForm } from '../NewTaskForm'
import { Footer } from '../Footer'
import { TaskList } from '../TaskList'

import './App.css'

export default function App() {
  let maxId = 4
  const createTodoItem = (label, status = '', id = maxId) => {
    maxId += 1
    const newItem = {
      label,
      taskStatus: status,
      id,
      createdAt: new Date(),
    }
    return newItem
  }
  const initialTodoData = [
    createTodoItem('Completed task', 'completed'),
    createTodoItem('Editing task', 'editing'),
    createTodoItem('Active task'),
  ]
  const initialFilter = 'all'

  const [todoData, setTodoData] = useState(initialTodoData)
  const [filter, setFilter] = useState(initialFilter)
  const onComplete = (id) => {
    const newData = todoData.map((todo) => {
      if (id === todo.id) {
        todo.taskStatus = todo.taskStatus === '' ? 'completed' : ''
      }
      return todo
    })

    setTodoData(newData)
  }

  const onDelete = (id) => {
    const newData = todoData.filter((todo) => todo.id !== id)
    setTodoData(newData)
  }

  const onEdit = (id) => {
    const editedData = todoData.map((todo) => {
      if (todo.taskStatus === 'editing') todo.taskStatus = ''
      if (todo.id === id && todo.taskStatus !== 'completed') todo.taskStatus = 'editing'
      return todo
    })
    setTodoData(editedData)
  }

  const editInput = (id, value) => {
    const editedData = todoData.map((todo) => {
      if (todo.id === id) todo.label = value
      return todo
    })
    setTodoData(editedData)
  }

  const editSubmit = (id, value) => {
    if (value.trim() === '') {
      return
    }
    const editedData = todoData.map((todo) => {
      if (todo.id === id) todo.taskStatus = ''
      return todo
    })
    setTodoData(editedData)
  }

  const onFilterChange = (filterType) => {
    setFilter(filterType)
  }

  const filterItems = (items, filterType) => {
    if (filterType === 'active') {
      return items.filter(({ taskStatus }) => taskStatus !== 'completed')
    }
    if (filterType === 'completed') {
      return items.filter(({ taskStatus }) => taskStatus === 'completed')
    }
    return items
  }

  const addItem = (text) => {
    if (text.trim() === '') {
      return
    }
    const newItem = createTodoItem(text)
    const newData = [...todoData, newItem]
    setTodoData(newData)
  }

  const onClearCompleted = () => {
    const filteredData = todoData.filter(({ taskStatus }) => taskStatus !== 'completed')
    setTodoData(filteredData)
  }

  const doneCount = todoData.filter((item) => item.taskStatus === 'completed').length
  const todoCount = todoData.length - doneCount
  const visibleItems = filterItems(todoData, filter)
  return (
    <section className="todoapp">
      <NewTaskForm onItemAdded={addItem} />
      <section className="main">
        <TaskList
          todos={visibleItems}
          onComplete={onComplete}
          onDelete={onDelete}
          onEdit={onEdit}
          editInput={editInput}
          editSubmit={editSubmit}
        />
        <Footer filter={filter} onClearCompleted={onClearCompleted} onFilter={onFilterChange} todoCount={todoCount} />
      </section>
    </section>
  )
}
