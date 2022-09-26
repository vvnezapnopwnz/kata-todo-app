import React from 'react';

import './task.css';

const Task = ({ label, createdAt, isEditing=false }) => {
  const editingInput = 
  <input onChange = {() => {}} type="text" className="edit" value={label}></input>;
  if(isEditing) {
    return (
      editingInput
    )
  }
  return (
    <div className="view">
      <input className="toggle" type="checkbox"></input>
      <label>
        <span className="description">{ label }</span>
        <span className="created">{ createdAt }</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
  );
};

export default Task;
