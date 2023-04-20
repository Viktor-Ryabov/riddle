import { Link } from "react-router-dom";
import Styles from "./ActionButton.module.css";

const ActionButton = (props) => {
    return (
        <Link
            className={Styles.button}
            to={props.to}
            onClick={props.actionFunction}
        >
            <p className={Styles.text}>{props.text1}</p>
        </Link>
    );
};

export default ActionButton;
