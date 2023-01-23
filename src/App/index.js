import React from 'react';
import { TaskProvider } from '../TaskContext';
import { AppUI } from './AppUI';


function App() {
  return (
    <TaskProvider>
      <AppUI />
    </TaskProvider>
  );
}

export default App;
