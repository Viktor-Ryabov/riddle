import { Link } from "react-router-dom";
import Styles from "./CurrentTaskButton.module.css";
import { useDispatch } from "react-redux";

const CurrentTaskButton = (props) => {
    const dispatch = useDispatch();
    const setDispatch = () => {
        dispatch({ type: `${props.type}` })
    }
    return (
        <Link to="/question" className={Styles.button}>
            <button
                className={Styles.title}
                onClick={setDispatch}
            >
                ?
            </button>
            {/* <p className={Styles.text}>текущая</p> */}
            {/* <p className={Styles.text}>задача</p> */}
        </Link>
    );
};

export default CurrentTaskButton;
