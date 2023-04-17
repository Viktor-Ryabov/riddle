import { ModalOwerlay } from "../ModalOwerlay/ModalOwerlay.js";
import { useCallback, useEffect } from "react";
import CloseIcon from "../../../UI/CloseIcon/CloseIcon.js";
import ReactDOM from "react-dom";
import Styles from "./Modal.module.css";
import CaptureForm from "../../../Modules/CaptureForm/CaptureForm.js";

const Modal = ({ ...props }) => {

   
    // const escFunction = useCallback((event) => {
    //     if (event.key === "Escape") {
    //         props.setModalDisabled();
    //     }
    // }, []);

    // useEffect(() => {
    //     document.addEventListener("keydown", escFunction, false);
    //     return () => {
    //         document.removeEventListener("keydown", escFunction, false);
    //     };
    // }, []);

    return ReactDOM.createPortal(
        <section
            className={`${props.active ? Styles.modal_active : ""} ${
                Styles.modal
            } p-10`}
            // onClick={escFunction}
        >
            <div className={Styles.modalContainer}>
                <div className={Styles.closeIcon}>
                    <CloseIcon />
                </div>

                <div className={Styles.discription}>
                    <CaptureForm { ...props }/>
                </div>
            </div>
            <ModalOwerlay />
        </section>,
        document.querySelector("#react-modals")
    );
};

export default Modal;
