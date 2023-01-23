import React from 'react';
import './TaskList.css'

function TaskList(props) {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TaskList };
