import React from 'react';
import { TaskContext } from '../TaskContext';
import { TaskCounter } from '../TaskCounter';
import { TaskList } from '../TaskList';
import { TaskItem } from '../TaskItem';
import { TasksError } from '../TasksError';
import { TasksLoading } from '../TasksLoading';
import { EmptyTasks } from '../EmptyTasks';
import { TaskForm } from '../TaskForm';
import { CreateTask } from '../CreateTask';
import { CreateTaskButton } from '../CreateTaskButton';
import { Modal } from '../Modal';

function AppUI() {
  const {
    error,
    loading,
    tasks,
    completeTask,
    deleteTask,
    openModal,
    setOpenModal,
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

      {!!openModal && (
        <Modal>
          <TaskForm />
        </Modal>
      )}

      <CreateTaskButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
