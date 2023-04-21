// import { useState } from "react";
import Styles from "./Header.module.css";
import Contacts from "./Modules/Contasts/Contacts.js";
import LogoSection from "./Modules/LogoSection/LogoSection.js";
import CurrentTaskButton from "./Modules/CurrentTaskButton/CurrentTaskButton.js";

const Header = () => {
    return (
        <div className={Styles.header}>
                <CurrentTaskButton />
                <LogoSection size="" />
                <Contacts />
        </div>
    );
};

export default Header;
