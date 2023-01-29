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


      <div className='container1'>

        <h2 className="subtitle">Create New Task</h2>
        <CreateTask
          addTask={addTask} />
      </div>

      <div className='container2'>

        <h1 className="title">Your Tasks</h1>


        <TaskCounter />

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
      </div>

    </React.Fragment>
  );
}

export { AppUI };
