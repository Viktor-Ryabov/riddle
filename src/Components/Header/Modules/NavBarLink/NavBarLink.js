import Styles from "../NavBarLink/NavBarLink.module.css";

export const NavBarLink = (props) => {
    return <section className={Styles.navBarLink}>{props.text}</section>;
};
