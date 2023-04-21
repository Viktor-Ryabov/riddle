import Styles from "./NavbarBurgerIcon.module.css";
import LogoMenu from "../../../../Images/burger_menu_icom-M.svg";

const NavbarBurgerIcon = (props) => {
    // console.log(props);
    return (
        <div onClick={props.changeState} className={`${props.state == true? Styles.buttonIsDisabled : Styles.button}`}>
            <img alt="меню" className={Styles.logo} src={LogoMenu} />
        </div>
    );
};

export default NavbarBurgerIcon;
