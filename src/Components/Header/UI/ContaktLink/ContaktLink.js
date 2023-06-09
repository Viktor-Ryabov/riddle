import { Link } from "react-router-dom";
import Styles from "./ContaktLink.module.css";

export const ContaktLink = (props) => {
    return (
        <Link
            to={props.to}
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
