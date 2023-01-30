import React from 'react';
import { TaskContext } from '../TaskContext';
import './TaskCounter.css';

function TaskCounter() {
  const { totalTasks, completedTasks } = React.useContext(TaskContext);
  
  return (
    <h2 className="subtitle">You have completed {completedTasks} of {totalTasks}</h2>
  );
}

export { TaskCounter };
