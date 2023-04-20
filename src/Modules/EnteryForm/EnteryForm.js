import React from "react";
import Styles from "./EnteryForm.module.css";
import ActionButton from "../../UI/ActionButton/ActionButton";
import { useDispatch } from "react-redux";

const EnteryForm = () => {
    const dispatch = useDispatch();

    const setRegistrationModalActive = () => {
        closePopup();
        dispatch({type: "REGISTRATION_POPUP_ACTIVE"});
    };

    const closePopup = () => {
        dispatch({ type: "ENTERY_POPUP_DISABLED" });
    };
    return (
        <div className={Styles.container}>
            <div className={Styles.inputs}>
                <div className={Styles.brand_title}>Введите Ваш ответ</div>

                <input
                    className={Styles.input}
                    type="mail"
                    placeholder="почта"
                />
                <input
                    className={Styles.input}
                    type="password"
                    placeholder="пароль"
                />
                <ActionButton
                    text1="Войти"
                    actionFunction={closePopup}
                    to="/personal_page"
                />

                <ActionButton
                    text1="Регистрация"
                    actionFunction={setRegistrationModalActive}
                />
            </div>
        </div>
    );
};

export default EnteryForm;
