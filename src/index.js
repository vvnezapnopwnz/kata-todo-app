import React from 'react';
import ReactDOM from 'react-dom/client';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';


const App = () => {

  const todoData = [
    {label: 'd cfe', important: false, key: 1},
    {label: 'mk aws app', important: true, key: 2},
    {label: 'hv l', important: false, key: 3}
  ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData}/>
    </div>
  )
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);


