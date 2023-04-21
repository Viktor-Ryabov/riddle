import { Link } from "react-router-dom";
import Styles from "./CurrentTaskButton.module.css";

const CurrentTaskButton = () => {
    return (
        <Link to="/first" className={Styles.button}>
            <p className={Styles.title}>?</p>
            {/* <p className={Styles.text}>текущая</p> */}
            {/* <p className={Styles.text}>задача</p> */}
        </Link>
    );
};

export default CurrentTaskButton;
