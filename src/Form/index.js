import "./style.css"

const Form = (props) => (
    <form className="form">
        <input type="text" className="form__input" placeholder="Co jest do zrobienia?" />
        <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;