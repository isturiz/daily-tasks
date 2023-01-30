import React from 'react';
import './TaskIcon.css';

import { IconSquare } from '@tabler/icons-react';
import { IconX } from '@tabler/icons-react';

const iconTypes = {
  "check": color => (
    <IconSquare color={color}/>
  ),
  "delete": color => (
    <IconX color={color} />
  ),
};

function TaskIcon({ type, color = 'gray', onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TaskIcon };
