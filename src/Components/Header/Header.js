import React from "react";
import Styles from "./Header.module.css";
import ActionButton from "../../UI/ActionButton/ActionButton";

const Header = () => {
    return (
        <div className={Styles.header}>
            <ActionButton text1="Главная" to="/" />
            <ActionButton text1="Личный кабинет" to="/personal_page" />
            <ActionButton text1="Текущая загадка" to="/first" />
        </div>
    );
};

export default Header;
