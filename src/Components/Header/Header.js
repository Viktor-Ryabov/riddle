import React from "react";
import Styles from "./Header.module.css";
import ActionButton from "../../UI/ActionButton/ActionButton";
import { withModal } from "../../hoc/withModal";
import EnteryForm from "../../Modules/EnteryForm/EnteryForm";
import { useSelector } from "react-redux";

const WithModalEntery = withModal(EnteryForm);
const Header = () => {
    const state = useSelector((state) => state);

    return (
        <div className={Styles.header}>
            <WithModalEntery active={state.enteryPopupActive} />
            <ActionButton text1="Главная" to="/" />
            <ActionButton text1="Личный кабинет" to="/personal_page" />
            <ActionButton text1="Текущая загадка" to="/first" />
        </div>
    );
};

export default Header;
