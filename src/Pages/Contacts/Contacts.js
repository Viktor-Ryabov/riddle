import "./Contacts.css";
import { withModal } from "../../hoc/withModal.js";
import { useDispatch, useSelector } from "react-redux";
import ActionButton from "../../UI/ActionButton/ActionButton.js";
import { Link } from "react-router-dom";

// const WithModalRegistration = withModal(CaptureForm);

const Contacts = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <>
            {/* <WithModalRegistration active={state.registrationPopupActive} /> */}
            <section className="contacts">
                <p className="title">Контакты</p>
                <p>+7 ... ....</p>
                <div className="contacts_buttons">
                    <ActionButton text1="Главная" to="/" />
                    <ActionButton text1="О нас" to="/about" />
                </div>
            </section>
        </>
    );
};

export default Contacts;
