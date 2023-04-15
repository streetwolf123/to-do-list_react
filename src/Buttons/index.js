import "./style.css"

const Buttons = ({tasks, hideDone}) => (
    tasks.length > 0 && (
        <div className="section__buttons--flex">
            <button className="section__button header__buttonToggleAllDone--flex" disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
            <button className="section__button">
                {hideDone ? "Pokaz" : "Ukryj"} ukończone
            </button>
        </div>
    )



);

export default Buttons;