import React from 'react';
import { TaskContext } from '../TaskContext';
import './TaskForm.css';

function TaskForm() {
  const [newTaskValue, setNewTaskValue] = React.useState('');
  const {
    addTask,
    setOpenModal,
  } = React.useContext(TaskContext);
  
  const onChange = (event) => {
    setNewTaskValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTask(newTaskValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TASK</label>
      <textarea
        value={newTaskValue}
        onChange={onChange}
        placeholder="Cortar la cebolla oara el almuerzo"
      />
      <div className="TaskForm-buttonContainer">
        <button
          type="button"
          className="TaskForm-button TaskForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TaskForm-button TaskForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TaskForm };
