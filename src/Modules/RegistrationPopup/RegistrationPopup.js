import React from "react";
import "./RegistrationPopup.css";
import ActionButton from "../../UI/ActionButton/ActionButton";
import { useDispatch } from "react-redux";

const RegistrationPopup = () => {
    const dispatch = useDispatch();

    const closePopup = () => {
        dispatch({ type: "REGISTRATION_POPUP_DISABLED" });
        console.log(123);
    };

    return (
        <>
            <p className="registration_title">РЕГИСТРАЦИЯ</p>
            <ActionButton
                text1="Зарегистрироваться"
                actionFunction={closePopup}
            />
        </>
    );
};

export default RegistrationPopup;
