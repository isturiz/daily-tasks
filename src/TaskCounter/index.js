import React from "react";
import './TaskCounter.css'

function TaskCounter( {total, completed} ) {

  return (
    <div>
      <h2 className="TaskCounter">Daily Tasks</h2>
      <p className="TaskCounter">Has completado {completed} of {total}</p>
    </div>
  )
}

export { TaskCounter };