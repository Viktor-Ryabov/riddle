import React from "react";
import Styles from "./NavbarButton.module.css";
import { Link } from "react-router-dom";
import { Scrollchor } from "react-scrollchor";

const NavbarButton = (props) => {
    return (
        <Scrollchor to={props.scrollTo} className={Styles.scrollchor}>
            <Link to={props.to} className={Styles.button}>
                {props.text}
            </Link>
        </Scrollchor>
    );
};

export default NavbarButton;
