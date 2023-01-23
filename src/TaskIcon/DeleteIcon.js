import React from 'react';
import { TaskIcon } from './';

function DeleteIcon({ onDelete }) {
  return (
    <TaskIcon
      type="delete"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };
