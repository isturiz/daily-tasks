import React from "react";
import { AppUI } from "./AppUI";
import { TaskProvider } from "../TaskContext";

function App() {

  return (
    <TaskProvider>
      <AppUI/>
    </TaskProvider>
  );
}

export default App;
