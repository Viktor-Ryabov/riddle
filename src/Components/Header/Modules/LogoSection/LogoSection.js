import Styles from "./LogoSection.module.css";
// import Logo from "../../UI/Logo/Logo";
import { Link } from "react-router-dom";
import logo from "./QL_white.svg"

const LogoSection = (props) => {
    return (
        <Link to="/" className={Styles.logoSection}>
            {/* <LogoMountains size={props.size} /> */}
            {/* <Logo size={props.size} /> */}
            <img className={Styles.logo} src={logo} alt="logo"/>
        </Link>
    );
};

export default LogoSection;
