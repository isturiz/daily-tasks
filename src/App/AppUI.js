import React from 'react';
import { TaskContext } from '../TaskContext';
import { TaskCounter } from '../TaskCounter';
import { TaskList } from '../TaskList';
import { TaskItem } from '../TaskItem';
import { TasksError } from '../TasksError';
import { TasksLoading } from '../TasksLoading';
import { CreateTask } from '../CreateTask';

function AppUI() {
  const {
    error,
    loading,
    tasks,
    completeTask,
    deleteTask,
    addTask,
  } = React.useContext(TaskContext);
  
  return (
    <React.Fragment>
      <TaskCounter />

      <CreateTask
        addTask={addTask}/>

      <TaskList>
        {error && <TasksError />}
        {loading && <TasksLoading />}
        {tasks.map(task => (
          <TaskItem
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete={() => completeTask(task.text)}
            onDelete={() => deleteTask(task.text)}
          />
        ))}
      </TaskList>
    </React.Fragment>
  );
}

export { AppUI };
