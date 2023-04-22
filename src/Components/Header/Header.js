// import { useState } from "react";
import Styles from "./Header.module.css";
import Contacts from "./Modules/Contasts/Contacts.js";
import LogoSection from "./Modules/LogoSection/LogoSection.js";
import CurrentTaskButton from "./Modules/CurrentTaskButton/CurrentTaskButton.js";
import profileLogo from "../../images/profile_user_account_icon_white.svg"
import { ContaktLink } from "./UI/ContaktLink/ContaktLink";

const Header = () => {
    return (
        <section className={Styles.header}>
            <div className={Styles.borderBlock}>
                <LogoSection size="" />
                <CurrentTaskButton />
                <Contacts />
                <ContaktLink src={profileLogo}/>
            </div>
        </section>
    );
};

export default Header;
