import React from 'react';
import { TaskContext } from '../TaskContext';
import { TaskCounter } from '../TaskCounter';
import { TaskList } from '../TaskList';
import { TaskItem } from '../TaskItem';
import { TasksError } from '../TasksError';
import { TasksLoading } from '../TasksLoading';
import { CreateTask } from '../CreateTask';

import { IconBrandGithub } from '@tabler/icons-react';


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

        <div className='div-container1'>

          <h2 className="subtitle-container1">Create New Task</h2>
          <CreateTask
            addTask={addTask} />
        </div>
        <div className='relleno'></div>
        {/* <img src='https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535cbcf5fa1a60fafcfcab_peep-95.svg' alt="life" /> */}
        {/* <img src='https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535cf47488c27eb04a70d1_peep-97.svg' alt="life" /> */}
        <img src='https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535bb6e35d38cae7684f8c_peep-86.svg' alt="life" />

        <div className='made-by-container'>
          <p>Made by Istúriz</p>
          <a href="https://github.com/isturiz/daily-tasks" target="_blank">
            <IconBrandGithub className='gh-link' style={{ width:"32px", height: "32px" }}/>
          </a>
        </div>


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

      <div className='relleno-container3'></div>

      <footer className='container3'>
        <p>Made by Istúriz</p>
        <a href="https://github.com/isturiz/daily-tasks" target="_blank">
          <IconBrandGithub className='gh-link' />
        </a>
      </footer>

    </React.Fragment>
  );
}

export { AppUI };
