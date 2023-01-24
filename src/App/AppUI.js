import React from 'react';
import { TaskContext } from '../TaskContext';
import { TaskCounter } from '../TaskCounter';
import { TaskSearch } from '../TaskSearch';
import { TaskList } from '../TaskList';
import { TaskItem } from '../TaskItem';
import { TasksError } from '../TasksError';
import { TasksLoading } from '../TasksLoading';
import { EmptyTasks } from '../EmptyTasks';
import { TaskForm } from '../TaskForm';
import { CreateTaskButton } from '../CreateTaskButton';
import { Modal } from '../Modal';

function AppUI() {
  const {
    error,
    loading,
    searchedTasks,
    completeTask,
    deleteTask,
    openModal,
    setOpenModal,
  } = React.useContext(TaskContext);
  
  return (
    <React.Fragment>
      <TaskCounter />
      {/* <TaskSearch /> */}

      

      <TaskList>
        {error && <TasksError />}
        {loading && <TasksLoading />}
        {(!loading && !searchedTasks.length) && <EmptyTasks />}
        
        {searchedTasks.map(task => (
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
