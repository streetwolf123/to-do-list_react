import "./style.css"

const Tasks = ({tasks, hideDoneTasks}) => (
    <ul className="list">
        {tasks.map(task => (
            <li key={task.id} className={`list__task ${task.done && hideDoneTasks ? "list__tasks--hiden" : ""}`}>
                <button className="task__button--toggleDone task__buttons">
                    <i className={`${task.done ? "" : "button__toggleDone--none"}`}>✔</i>
                </button>

                <span className={`task__content ${task.done ? "task__content--done" : ""}`}>{task.content}</span>

                <button className="task__buttonRemove task__buttons">
                    🗑️
                </button>
            </li >
        ))}
    </ul >
);

export default Tasks;