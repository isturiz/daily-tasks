import React from "react";
import './TaskItem.css'

function TaskItem(props) {

  return (
    <li className="TaskItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}  
        onClick={props.onComplete}
      >C</span>

      <p className={`TaskItem-p ${props.completed && 'TaskItem-p--completed'}`}> { props.text } </p>

      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
      X
      </span>
    </li>
  )
}

export { TaskItem }