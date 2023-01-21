import React from "react";
import './CreateTaskButton.css'

function CreateTaskButton() {

  const onClickButton = () => {
    alert("Modal")
  }

  return (
    <button 
      className = "CreateTaskButton"
      onClick = { onClickButton }
      > 
    + 
    </button>
  )
}

export { CreateTaskButton }