import React from "react";
import Styles from "./NavbarButton.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const NavbarButton = (props) => {
    const dispatch = useDispatch();
    const setButtonActive = () => {
        if (props.page === "main") {
            dispatch({ type: "SET_MAIN_ACTIVE" });
        } else if (props.page === "about") {
            dispatch({ type: "SET_ABOUT_ACTIVE" });
        } else if (props.page === "contacts") {
            dispatch({ type: "SET_CONTACTS_ACTIVE" });
        } else if (props.page === "registration") {
            dispatch({ type: "SET_REGISTRATION_ACTIVE" });
        }
    };

    return (
        
            <button
            onClick={setButtonActive}
            className={
                props.active
                    ? Styles.button + " " + Styles.active_button
                    : Styles.button
            }
        >
            <Link to={props.to} className={Styles.link}>
            {props.text}
            </Link>
            
            </button>
    );
};

export default NavbarButton;
