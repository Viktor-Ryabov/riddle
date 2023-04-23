import { Link } from "react-router-dom";
import Styles from "./ContaktLink.module.css";
import { useDispatch } from "react-redux";

export const ContaktLink = (props) => {
    const dispatch = useDispatch()
    const setDispatch = () => {
        dispatch({type: `${props.type}`});
    }
    return (
        <Link
            to={props.to}
            onClick={setDispatch}
            rel="noreferrer"
            className={Styles.contaktLink}
            href={props.href}
        >
            <img
                className={Styles.contaktLinkIcon}
                src={props.src}
                alt={props.alt}
            />
            {/* {props.text} */}
        </Link>
    );
};
