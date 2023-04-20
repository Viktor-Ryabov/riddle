import { ModalOwerlay } from "../ModalOwerlay/ModalOwerlay.js";
import CloseIcon from "../../../UI/CloseIcon/CloseIcon.js";
import ReactDOM from "react-dom";
import Styles from "./Modal.module.css";

const Modal = ({ ...props }) => {

    return ReactDOM.createPortal(
        <section
            className={`${props.active ? Styles.modal_active : ""} ${
                Styles.modal
            } p-10`}
        >
            <div className={Styles.modalContainer}>
                <div className={Styles.closeIcon}>
                    <CloseIcon />
                </div>

                <div className={Styles.discription}>
                   <>{props.children}</>
                </div>
            </div>
            <ModalOwerlay />
        </section>,
        document.querySelector("#react-modals")
    );
};

export default Modal;
