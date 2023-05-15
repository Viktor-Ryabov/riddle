import { Link } from "react-router-dom";
import Styles from "./UserPageLink.module.css";

export const UserPageLink = (props) => {
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
