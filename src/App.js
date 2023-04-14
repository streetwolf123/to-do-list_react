import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section"
import Header from "./Header";
import Conteiner from "./Conteiner"

const tasks = [
  { id: 1, content: "Przenieść To Do Liste do React.js", done: false },
  { id: 2, content: "Cieszyć się z dobrej roboty", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Conteiner>
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

    </Conteiner>
  );
}

export default App;