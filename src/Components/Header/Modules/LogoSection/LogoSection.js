import Styles from "./LogoSection.module.css";
// import Logo from "../../UI/Logo/Logo";
import { Link } from "react-router-dom";
import logo from "./QL_white.svg";
import { useDispatch } from "react-redux";

const LogoSection = (props) => {
    const dispatch = useDispatch();
    const goToMainPage = () => {
        dispatch({ type: `${props.type}` })
    }
    return (
        <Link to="/" className={Styles.logoSection} onClick={goToMainPage}>
            <img className={Styles.logo} src={logo} alt="logo"/>
        </Link>
    );
};

export default LogoSection;
