import Styles from "./PersonalPage.module.css";
import ActionButton from "../../UI/ActionButton/ActionButton.js";


const PersonalPage = () => {

    return (
        <>
            <section className="contacts">
                <p className="title">Персональная страница пользователя</p>
                <p>Имя</p>
                <p>Данные профиля</p>
                <div className="contacts_buttons">
                    <ActionButton text1="Главная" to="/" />
                    <ActionButton text1="Начать" to="/first" />
                </div>
            </section>
        </>
    );
};

export default PersonalPage;
