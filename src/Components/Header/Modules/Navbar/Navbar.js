import Styles from "./Navbar.module.css";
import NavbarButton from "../NavbarButton/NavbarButton.js";
import { useSelector } from "react-redux";

const Navbar = () => {
    const state = useSelector((state) => state);

    console.log(state);
    return (
        <div className={Styles.navbar}>
            <NavbarButton
                to="/"
                page="main"
                text="ГЛАВНАЯ"
                active={state.navbarButton_Main}
            />
            <NavbarButton
                to="/about"
                text="О НАС"
                page="about"
                active={state.navbarButton_About}
            />
            <NavbarButton
                page="contacts"
                to="/contsct"
                text="КОНТАКТЫ"
                active={state.navbarButton_Contacts}
            />
            <NavbarButton
                page="rules"
                to="/rules"
                text="ПРАВИЛА"
                active={state.navbarButton_rules}
            />
        </div>
    );
};

export default Navbar;
