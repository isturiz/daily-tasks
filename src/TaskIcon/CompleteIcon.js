import React from 'react';
import { TaskIcon } from './';

function CompleteIcon({ completed, onComplete }) {
  return (
    <TaskIcon
      type="check"
      color={completed ? '#4caf50' : 'gray'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
