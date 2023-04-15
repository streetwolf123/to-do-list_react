import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section"
import Header from "./Header";
import Container from "./Container"
import React, { useState } from "react";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  const [tasks, setTasks] = useState([
    { id: 1, content: "Przenieść To Do Liste do React.js", done: false },
    { id: 2, content: "Cieszyć się z dobrej roboty", done: true },
    { id: 3, content: "zacząć pracę domową z 8 modółu", done: true },
  ]);

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if(task.id === id) {
        return {...task, done: !task.done};
      }

      return task;
    }))
  }

  const toggleAllTasksDone = () => {
    setTasks(tasks => tasks.map(task => ({...task, done: true,})))
   
  }

  const addNewTask = (content) => {  
      setTasks(tasks => [
        ...tasks,
        {
          content: content,
          done:false,
          id: tasks.lenght === 0 ? 1 : tasks[tasks.length -1].id +1
        }
      ])   
  }

  return (
    <Container>
      <Header
        title="Lista Zadań" />
      <Section
        title="Dodaj Nowe Zadanie"
        body={
        <Form 
        addNewTask={addNewTask}
        />}
      />
      <Section
        title="Lista Zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone} 
            toggleAllTasksDone={toggleAllTasksDone}
            />}
        body={
        <Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />
      }
        
      />
    </Container>
  );
}

export default App;
