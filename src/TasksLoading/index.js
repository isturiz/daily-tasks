import React from 'react';
import './TasksLoading.css';

function TasksLoading() {
  return (
    <div className="LoadingTask-container">
      <span className="LoadingTask-completeIcon"></span>
      <p className="LoadingTask-text">Cargando TASKs...</p>
      <span className="LoadingTask-deleteIcon"></span>
    </div>
  );
}

export { TasksLoading };
