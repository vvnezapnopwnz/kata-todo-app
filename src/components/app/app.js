import React, { Component} from 'react';
import NewTaskForm from '../new-task-form';
import Footer from '../footer';
import TaskList from '../task-list';

import './app.css';

export default class App extends Component {

  maxId = 4;

  state = {
    todoData: [
      this.createTodoItem("Completed task","completed"),
      this.createTodoItem("Editing task","editing", ),
      this.createTodoItem("Active task"),
    ],
    filter: 'all',
  }

  onComplete = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((todo) => {
        if (id === todo.id) {
          todo.taskStatus = todo.taskStatus === "" ? "completed" : "";
        }
        return todo;
      }),
    }));
  };

  onDelete = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((todo) => todo.id !== id),
    }));
  };

  onEdit = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((todo) => {
        if (todo.taskStatus === "editing") todo.taskStatus = "";
        if (todo.id === id && todo.taskStatus !== "completed")
          todo.taskStatus = "editing";
        return todo;
      }),
    }));
  };

  editInput = (id, value) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((todo) => {
        if (todo.id === id) todo.label = value;
        return todo;
      }),
    }));
  };

  editSubmit = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((todo) => {
        if (todo.id === id) todo.taskStatus = "";
        return todo;
      }),
    }));
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  filterItems(items, filter) {
    if (filter === 'all') {
      return items;
    } else if (filter === 'active') {
      return items.filter(({taskStatus}) => taskStatus !== 'completed');
    } else if (filter === 'completed') {
      return items.filter(({taskStatus}) => taskStatus === 'completed');
    }
  }


  createTodoItem(label, status = '') {
    return {
      label: label,
      taskStatus: status,
      id: this.maxId++,
      createdAt: new Date(),
    }
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text)
    this.setState(({todoData}) => {
      const newData = [...todoData, newItem];
      return {
        todoData: newData,
      }
    })
  }

  onClearCompleted = () => {
    this.setState(({ todoData }) => {
      const filteredData = todoData.filter(({taskStatus}) => taskStatus !== 'completed');
      return {
        todoData: filteredData
      }
    });
  };

  render () {
    const {todoData, filter } = this.state;
    const doneCount = todoData.filter((item) => item.taskStatus === 'completed').length;
    const todoCount = todoData.length - doneCount;
    const visibleItems = this.filterItems(todoData, filter);
    return (
      <section className="todoapp">
        <NewTaskForm onItemAdded = { this.addItem }/>
        <section className="main">
          <TaskList 
            todos={ visibleItems }
            onComplete={this.onComplete}
            onDelete={this.onDelete}
            onEdit={this.onEdit}
            editInput={this.editInput}
            editSubmit={this.editSubmit}
          />
          <Footer
          filter = { filter }
          onClearCompleted = { this.onClearCompleted }
          onFilter={this.onFilterChange}
          todoCount={todoCount}/>
        </section>
      </section>
    );
  }
}




