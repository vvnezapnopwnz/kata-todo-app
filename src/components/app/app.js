import React from 'react';

import NewTaskForm from '../new-task-form';
import Footer from '../footer';
import TaskList from '../task-list';

import './app.css';

const App = () => {

  const todoData = [
    { status: 'completed', label: 'Completed task', createdAt: 'created 17 seconds ago', id: 1 },
    { status: 'editing', label: 'Editing task', id: 2, isEditing:true},
    { label: 'Active task', createdAt: 'created 5 minutes ago', id: 3 }
  ];

  return (
    <section className="todoapp">
      <NewTaskForm />
      <section className="main">
        <TaskList todos={todoData} />
        <Footer />
      </section>
    </section>
  );
};

export default App;
