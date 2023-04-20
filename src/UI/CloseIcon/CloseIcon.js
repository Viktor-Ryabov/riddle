import { useDispatch } from "react-redux";
import Styles from "./CloseIcon.module.css";
import close_icon from "../../images/close_icon.png";

const CloseIcon = () => {
    const dispatch = useDispatch();
    const closePopup = () => {
        dispatch({ type: "ALL_MODAL_DISABLED" });
    }
    return (
        <div className={Styles.closeIcon} onClick={closePopup}>
            <img className={Styles.icon}src={close_icon} alt="closeIcon"/>
        </div>
    );
};

export default CloseIcon;
