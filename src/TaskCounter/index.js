import React from 'react';
import { TaskContext } from '../TaskContext';
import './TaskCounter.css';

function TaskCounter() {
  const { totalTasks, completedTasks } = React.useContext(TaskContext);
  
  return (
    <h2 className="TaskCounter">Has completado {completedTasks} de {totalTasks} TASKS</h2>
  );
}

export { TaskCounter };
