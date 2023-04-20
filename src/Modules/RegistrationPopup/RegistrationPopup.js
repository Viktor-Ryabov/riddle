import React from "react";
import Styles from "./RegistrationPopup.css";
import ActionButton from "../../UI/ActionButton/ActionButton";
import { useDispatch } from "react-redux";

const RegistrationPopup = () => {
    const dispatch = useDispatch();

    const closePopup = () => {
        dispatch({ type: "REGISTRATION_POPUP_DISABLED" });
        console.log(123)
    };

    return (
        <div className={Styles.container}>
            <div className={Styles.inputs}>
                <div className={Styles.brand_title}>Регистрация</div>
                <ActionButton text1="Зарегистрироваться" actionFunction={closePopup}/>
            </div>
        </div>
    );
};

export default RegistrationPopup;
