import Styles from "./LogoSection.module.css";
// import Logo from "../../UI/Logo/Logo";
import { Link } from "react-router-dom";

const LogoSection = (props) => {
    return (
        <Link to="/" className={Styles.logoSection}>
            {/* <LogoMountains size={props.size} /> */}
            {/* <Logo size={props.size} /> */}
            LOGO
        </Link>
    );
};

export default LogoSection;
