import React from "react";
import Styles from "./SuccessAuthPopup.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SuccessAuthPopup = (props) => {
    const dispatch = useDispatch();

    return (
        <div className={Styles.container}>
            <div className={Styles.inputs}>
                <div className={Styles.brand_title}>{props.ma}</div>

                <Link
                    to="/main"
                    className={Styles.button}
                    type="send"
                    onClick={() => {
                        dispatch({ type: "ALL_MODAL_DISABLED" });
                    }}
                >
                    ПОЕХАЛИ!
                </Link>
            </div>
        </div>
    );
};

export default SuccessAuthPopup;
