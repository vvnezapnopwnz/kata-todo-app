import React, { Component} from 'react';
import NewTaskForm from '../new-task-form';
import Footer from '../footer';
import TaskList from '../task-list';

import './app.css';

export default class App extends Component {

  state = {
    todoData: [
      { id: 1, taskStatus: "completed", label: "Completed task" },
      { id: 2, taskStatus: "editing", label: "Editing task" },
      { id: 3, taskStatus: "", label: "Active task" },
    ],
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

  render () {

    const {todoData } = this.state;
    return (
      <section className="todoapp">
        <NewTaskForm />
        <section className="main">
          <TaskList 
            todos={ todoData }
            onComplete={this.onComplete}
            onDelete={this.onDelete}
            onEdit={this.onEdit}
            editInput={this.editInput}
            editSubmit={this.editSubmit}
          />
          <Footer />
        </section>
      </section>
    );
  }
}




