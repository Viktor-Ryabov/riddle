import React from "react";
import Styles from "./SuccessAuthPopup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SuccessAuthPopup = (props) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const makeAutoAuth = () => {
        props.makeAuth();
        dispatch({ type: "ALL_MODAL_DISABLED" });
    }
    return (
        <div className={Styles.container}>
            <div className={Styles.inputs}>
                <div className={Styles.brand_title}>{props.text}</div>

                <Link
                    to="/user"
                    className={Styles.button}
                    type="send"
                    onClick={() => {
                        makeAutoAuth();
                    }}
                >
                    OK...
                </Link>
            </div>
        </div>
    );
};

export default SuccessAuthPopup;
