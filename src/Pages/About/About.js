import "./About.css";
import { withModal } from "../../hoc/withModal.js";
import { useDispatch, useSelector } from "react-redux";
import ActionButton from "../../UI/ActionButton/ActionButton.js";
import { Link } from "react-router-dom";

// const WithModalRegistration = withModal(CaptureForm);

const About = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <>
            {/* <WithModalRegistration active={state.registrationPopupActive} /> */}
            <section className="about">
                <p className="title">О нас</p>
                <p>Юра и Витя Молодцы</p>
                <div className="about_buttons">
                    <ActionButton text1="Главная" to="/" />
                    <ActionButton text1="Контакты" to="/contacts" />
                </div>
            </section>
        </>
    );
};

export default About;
