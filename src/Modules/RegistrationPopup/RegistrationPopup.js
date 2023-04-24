import React from "react";
import "./RegistrationPopup.css";
import ActionButton from "../../UI/ActionButton/ActionButton";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const RegistrationPopup = () => {
    const dispatch = useDispatch();

    const closePopup = () => {
        dispatch({ type: "REGISTRATION_POPUP_DISABLED" });
    };

    return (
        <>
            <p className="registration_title">РЕГИСТРАЦИЯ</p>
            <ActionButton
                text1="Готово"
                actionFunction={closePopup}
                to="/personal_page"
            />
        </>
    );
};

export default RegistrationPopup;
