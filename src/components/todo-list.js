import React from "react";
import TodoListItem from './todo-list-item';
import './todo-list.css';

const TodoList = ({ todos }) => {

    const elements = todos.map(({key, ...el}) => {
        return (
            <li key={key} className="list-group-item">
              <TodoListItem {...el}/>
            </li>
        )
    })

  return (
    <div>
      <ul className="list-group todo-list">
        {elements}
      </ul>
    </div>
  );
};

export default TodoList;