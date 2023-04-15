import "./style.css"

const Buttons = ({tasks, hideDoneTasks}) => (
    tasks.length > 0 && (
        <div className="section__buttons--flex">
            <button className="section__button header__buttonToggleAllDone--flex" disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
            <button className="section__button">
                {hideDoneTasks ? "Pokaz" : "Ukryj"} ukończone
            </button>
        </div>
    )



);

export default Buttons;