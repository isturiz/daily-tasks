import React from 'react';
import './CreateTask.css';

function CreateTask ({ addTask }) {
	// Funcion para agregar Tasks con la tecla enter
	const addTaskKeyDown = (event) => {
		if (event.keyCode === 13 && event.target.value !== '') {
			addTask(event.target.value);
			event.target.value = '';
		}
	};

	return (
		<div className="createTask">
			<input
				className="input"
				placeholder="Write something 👀"
				onKeyDown={addTaskKeyDown}
			></input>
		</div>
	);
}

export { CreateTask };
