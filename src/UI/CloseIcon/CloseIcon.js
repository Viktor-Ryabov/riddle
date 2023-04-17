import { useDispatch } from "react-redux";
import Styles from "./CloseIcon.module.css";
import Icon from "./image/bonfire_fire_icon_250693.png";

const CloseIcon = () => {
    const dispatch = useDispatch();
    const closePopup = () => {
        dispatch({ type: "ALL_MODAL_DISABLED" });
    }
    return (
        <div className={Styles.closeIcon} onClick={closePopup}>
            <img src={Icon} className={Styles.closeIcon} alt="закрыть" />
        </div>
    );
};

export default CloseIcon;
