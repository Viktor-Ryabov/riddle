import "./Main.css";
import { withModal } from "../../hoc/withModal.js";
import { useDispatch, useSelector } from "react-redux";
import ActionButton from "../../UI/ActionButton/ActionButton.js";
import RegistrationPopup from "../../Modules/RegistrationPopup/RegistrationPopup";

const WithModalRegistration = withModal(RegistrationPopup);

const Main = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const setRegistrationModalActive = () => {
        dispatch({type: "REGISTRATION_POPUP_ACTIVE"});
    };

    return (
        <>
            <WithModalRegistration active={state.registrationPopupActive} />
            <section className="Main">
                <p className="title">Главная страница</p>
                <div className="buttons">
                    <ActionButton text1="О нас" to="/about" />
                    <ActionButton text1="Контакты" to="/contacts" />
                </div>
                <div className="buttons">
                    <ActionButton
                        text1="Войти"
                        // actionFunction={actionFunction}
                    />
                    <ActionButton
                        text1="Регистрация"
                        actionFunction={setRegistrationModalActive}
                    />
                </div>
            </section>
        </>
    );
};

export default Main;
