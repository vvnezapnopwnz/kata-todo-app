import React from "react";
import './todo-list-item.css'
const TodoListItem = ({label, important=false}) => {
    const style = {
        color: important ? 'tomato': 'black'
    }

    return (
        <span className='todo-list-item'>{label}</span>
    );
  };

  export default TodoListItem;