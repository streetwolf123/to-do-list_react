import "./style.css"

const Buttons = ({tasks, hideDoneTasks}) => (
    tasks.length > 0 && (
        <div className="header__buttons--flex">
            <button className="buttons header__buttonToggleAllDone--flex" disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
            <button className="buttons">
                {hideDoneTasks ? "Pokaz" : "Ukryj"} ukończone
            </button>
        </div>
    )



);

export default Buttons;