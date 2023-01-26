import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TaskContext = React.createContext();

function TaskProvider(props) {
  const {
    item: tasks,
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage('TASKS_V1', []);
  const [openModal, setOpenModal] = React.useState(false);

  const completedTasks = tasks.filter(task => !!task.completed).length;
  const totalTasks = tasks.length;

  const addTask = (text) => {
    const newTasks = [...tasks];
    newTasks.push({
      completed: false,
      text,
    });
    saveTasks(newTasks);
  };

  const completeTask = (text) => {
    const taskIndex = tasks.findIndex(task => task.text === text);
    const newTasks = [...tasks];
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
	  saveTasks(newTasks);
  };

  const deleteTask = (text) => {
    const taskIndex = tasks.findIndex(task => task.text === text);
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };
  
  return (
    <TaskContext.Provider value={{
      loading,
      error,
      totalTasks,
      completedTasks,
      tasks,
      addTask,
      completeTask,
      deleteTask,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskProvider };
