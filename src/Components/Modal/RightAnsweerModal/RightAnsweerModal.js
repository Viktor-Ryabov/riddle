import { ModalOwerlay } from "../ModalOwerlay/ModalOwerlay.js";
import { useCallback, useEffect } from "react";
import CloseIcon from "../../../UI/CloseIcon/CloseIcon.js";
import ReactDOM from "react-dom";
import Styles from "./RightAnsweerModal.module.css";
import CaptureForm from "../../../Modules/CaptureForm/CaptureForm.js";
import { useDispatch } from "react-redux";

const RightAnsweerModal = ({ ...props }) => {
    const dispatch = useDispatch();

    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            dispatch({type: "WRONG_ANSWER_DISABLED"});
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    return ReactDOM.createPortal(
        <section
            className={`${props.active ? Styles.modal_active : ""} ${
                Styles.modal
            } p-10`}
            onClick={escFunction}
        >
            <div className={Styles.modalContainer}>
                <div className={Styles.closeIcon}>
                    <CloseIcon />
                </div>

                <div className={Styles.discription}>
                    <div className={Styles.container}>
                        <div className={Styles.inputs}>
                            <div className={Styles.brand_title}>
                                Ваш ответ верный
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <ModalOwerlay />
        </section>,
        document.querySelector("#react-modals")
    );
};

export default RightAnsweerModal;
