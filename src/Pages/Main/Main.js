import "./Main.css";
import { withModal } from "../../hoc/withModal.js";
import { useDispatch, useSelector } from "react-redux";
import ActionButton from "../../UI/ActionButton/ActionButton.js";

// const WithModalRegistration = withModal(CaptureForm);

const Main = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <>
            {/* <WithModalRegistration active={state.registrationPopupActive} /> */}
            <section className="Main">
                <p>Главная страница</p>
                <div className="buttons">
                <ActionButton text1="О нас" />
                    <ActionButton text1="Контакты" />
                </div>
                <>
                    <ActionButton text1="Войти" />
                    <ActionButton text1="Регистрация" />
                </>
            </section>
        </>
    );
};

export default Main;
