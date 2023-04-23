import Styles from "./PersonalPage.module.css";
import ActionButton from "../../UI/ActionButton/ActionButton.js";


const PersonalPage = () => {

    return (
        <>
            <section className={Styles.contacts}>
                <p className={Styles.title}>Персональная страница пользователя</p>
                <p>Имя</p>
                <p>Данные профиля</p>
            </section>
        </>
    );
};

export default PersonalPage;
