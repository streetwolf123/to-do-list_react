import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section"
import Header from "./Header";
import Container from "./Container"
import React, { useState } from "react";

const tasks = [
  { id: 1, content: "Przenieść To Do Liste do React.js", done: false },
  { id: 2, content: "Cieszyć się z dobrej roboty", done: true },
  { id: 3, content: "zacząć pracę domową z 8 modółu", done: true},
];



function App() {
  const [hideDone, setHideDone] = useState(false);

    const toggleHideDone = () => {
      setHideDone(hideDone => !hideDone)
    };

  return (
    <Container>
      <Header
        title="Lista Zadań" />
      <Section
        title="Dodaj Nowe Zadanie"
        body={<Form />}
      />
      <Section
        title="Lista Zadań"
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={
        <Buttons 
        tasks={tasks} 
        hideDone={hideDone}
        toggleHideDone={toggleHideDone} />}
      />
    </Container>
  );
}

export default App;
