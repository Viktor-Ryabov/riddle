import React from "react";
import Styles from "./NavbarButton.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { Scrollchor } from "react-scrollchor";

const NavbarButton = (props) => {
    

    return (
        // <Scrollchor to={props.scrollTo} className={Styles.scrollchor}>
        <Link to={props.to}>
            <button
            // onClick={props.setButtonActive}
            className={
                props.active
                    ? Styles.button + " " + Styles.active_button
                    : Styles.button
            }
        >
            {props.text}
            </button>
        </Link>
        // </Scrollchor>
    );
};

export default NavbarButton;
