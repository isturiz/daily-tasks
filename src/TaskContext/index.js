import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TaskContext = React.createContext()

const {
  item: tasks,
  saveItem: saveTasks,
  error,
  loading,
} = useLocalStorage('TASKS_V1', [])

const completedTask = tasks.filter(task => !!task.completed).length
const totalTask = tasks.length;

const completeTask = (text) => {
  const taskIndex = tasks.findIndex(task => task.text === text)
  const newTasks = [...tasks]
  newTasks[taskIndex].completed = !newTasks[taskIndex].completed
  saveTasks(newTasks)
}

const deleteTask = (text) => {
  const taskIndex = tasks.findIndex(task => task.text === text)
  const newTasks = [...tasks]
  newTasks.splice(taskIndex, 1)
  saveTasks(newTasks)
}

function TaskProvider(props) {
  return (
    <TaskContext.Provider 
      value={{
        // Status
      error,
      loading,

      //TaskCounter 
      totalTask,
      completedTask,

      // TaskList
      tasks,

      // TaskItem
      completeTask,
      deleteTask,

    }}>
      {props.children}
    </TaskContext.Provider>

  )
}

export { TaskContext, TaskProvider}