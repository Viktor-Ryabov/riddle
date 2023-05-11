import "./Main.css";
import { withModal } from "../../hoc/withModal.js";
import { useSelector } from "react-redux";
import RegistrationPopup from "../../Modules/RegistrationPopup/RegistrationPopup";
import EnteryForm from "../../Modules/EnteryForm/EnteryForm";

const WithModalRegistration = withModal(RegistrationPopup);
const WithModalEntery = withModal(EnteryForm);

const Main = () => {
    const state = useSelector((state) => state);

    return (
        <>
            <WithModalRegistration active={state.registrationPopupActive} />
            <WithModalEntery active={state.enteryPopupActive} />
            <section className="Main">
                <p className="main_title">Главная страница</p>
            </section>
        </>
    );
};

export default Main;
