import Styles from "./Navbar.module.css";
import NavbarButton from "../NavbarButton/NavbarButton.js";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const setButtonActive = (page) => {
        switch(page){
            case "main":
                dispatch({ type: "SET_MAIN_ACTIVE"});
                break;
            case "about":
                dispatch({ type: "SET_ABOUT_ACTIVE"});
                break;
            case "contacts":
                dispatch({ type: "SET_CONTACTS_ACTIVE"});
                break;
            case "registration":
                dispatch({ type: "SET_REGISTRATION_ACTIVE"});
                break;
            default:
                dispatch({ type: "SET_MAIN_ACTIVE"});
                break;
        }
    }


    console.log(state)
    return (
        <div className={Styles.navbar}>
            <NavbarButton to="/" text="ГЛАВНАЯ" setButtonActive={setButtonActive("main")}  active={state.navbarButtons.main} />
            <NavbarButton to="/about" text="О НАС" setButtonActive={setButtonActive("about")} active={state.navbarButtons.about}/>
            <NavbarButton to="/contsct" text="КОНТАКТЫ" setButtonActive={setButtonActive("contacts")} active={state.navbarButtons.contacts}/>
            <NavbarButton to="/registration" text="РЕГИСТРАЦИЯ" setButtonActive={setButtonActive("registration")} active={state.navbarButtons.registration}/>
        </div>
    );
};

export default Navbar;
