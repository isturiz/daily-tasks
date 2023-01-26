import React from 'react';
import './CreateTask.css';

function CreateTask ({ addTask }) {
	// Funcion para agregar todos con la tecla enter
	const addTaskKeyPress = (event) => {
		if (event.charCode === 13 && event.target.value !== '') {
			addTask(event.target.value);
			event.target.value = '';
		}
	};

	return (
		<div className="createTodo">
			<div className="circulo"></div>
			<input
				className="input"
				placeholder="Create a new task..."
				onKeyPress={addTaskKeyPress}
			></input>
		</div>
	);
}

export { CreateTask };
