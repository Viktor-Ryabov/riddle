import { useDispatch } from "react-redux";
import Styles from "./CloseIcon.module.css";

const CloseIcon = () => {
    const dispatch = useDispatch();
    const closePopup = () => {
        dispatch({ type: "ALL_MODAL_DISABLED" });
    }
    return (
        <div className={Styles.closeIcon} onClick={closePopup}>
            ☠️
        </div>
    );
};

export default CloseIcon;
