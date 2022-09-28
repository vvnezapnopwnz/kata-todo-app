import React, { Component } from 'react';
// import { formatDistanceToNow } from 'date-fns'
import './task.css';

export default class Task extends Component {

    render() {
      const {
        id,
        taskStatus,
        label,
        onDelete,
        onComplete,
        onEdit,
        editInput,
        editSubmit,
      } = this.props;
  
      const onSubmitHandler = (e) => {
        e.preventDefault();
        editSubmit(id);
      };
  
      const taskInput =
        taskStatus === "editing" ? (
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <input
              type="text"
              className="edit"
              value={label}
              onChange={(e) =>  editInput(id, e.target.value)}
            />
          </form>
        ) : (
          ""
        );
  
      return (
        <li className={taskStatus}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={taskStatus === "completed"}
              onChange={() => onComplete(id)}
              id={"task-" + id}
            />
            <label htmlFor={"task-" + id}>
              <span className="description">{label}</span>
              <span className="created">created 17 seconds ago</span>
            </label>
            <button
              className="icon icon-edit"
              onClick={(e) => onEdit(id)}
              type="button"
            />
            <button
              className="icon icon-destroy"
              type="button"
              onClick={() => onDelete(id)}
            />
          </div>
          {taskInput}
        </li>
      );
    }
}

