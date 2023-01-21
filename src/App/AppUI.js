import React from "react";

import { TaskContext } from "../TaskContext";
import { TaskCounter } from '../TaskCounter'
import { TaskList } from '../TaskList'
import { TaskItem } from '../TaskItem/index.js';
import { CreateTaskButton } from '../CreateTaskButton/index.js';
import { AddNewTask } from '../AddNewTask/index.js';

function AppUI() {
  return (
    <React.Fragment>
      <TaskCounter />

      <TaskContext.Consumer>
        {({ 
          error, 
          loading, 
          completeTask, 
          deleteTask, 
          tasks,
        }) => (

          <TaskList>

          {/* Status */}
          {error && <p>Error...</p>}
          {loading && <p>Loading...</p>}
          {!loading && <p>Create your first taks</p>}
  
  
          {tasks.map(task => (
            <TaskItem
              key = { task.text }
              text = { task.text } 
              completed = { task.completed }
              onComplete = { () => completeTask(task.text) }
              onDelete = { () => deleteTask(task.text) }
            />
          ))}
        </TaskList>
        )}
      </TaskContext.Consumer>

      <CreateTaskButton />

      <AddNewTask />
    </React.Fragment>
  )
}

export { AppUI }