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
        <div className='relleno'></div>
        <img src='https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535cbcf5fa1a60fafcfcab_peep-95.svg' alt="life" />
        {/* <img src='https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535cf47488c27eb04a70d1_peep-97.svg' alt="life" /> */}
        {/* <img src='https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535bb6e35d38cae7684f8c_peep-86.svg' alt="life" /> */}

        
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
