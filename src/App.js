import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section"
import Header from "./Header";
import Container from "./Container"

const tasks = [
  { id: 1, content: "Przenieść To Do Liste do React.js", done: false },
  { id: 2, content: "Cieszyć się z dobrej roboty", done: true },
  { id: 3, content: "zacząć pracę domową z 8 modółu", done: true},
];

const hideDoneTasks = false;

function App() {
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
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>
  );
}

export default App;
