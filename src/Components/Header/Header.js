import Styles from "./Header.module.css";
import Contacts from "./Modules/Contasts/Contacts.js";
import LogoSection from "./Modules/LogoSection/LogoSection.js";
import CurrentTaskButton from "./Modules/CurrentTaskButton/CurrentTaskButton.js";
import profileLogo from "../../images/profile_user_account_icon_white.svg";
import Navbar from "./Modules/Navbar/Navbar";
import { UserPageLink } from "./UI/UserPagelink/UserPageLink";

const Header = () => {
    return (
        <section className={Styles.header}>
            <div className={Styles.borderBlock}>
                <LogoSection size="" type="SET_MAIN_ACTIVE"/>
                <Contacts />
                <UserPageLink src={profileLogo} to="/user" type="SET_USER_PAGE_ACTIVE"/>
                <CurrentTaskButton type="SET_QUESTION_PAGE_ACTIVE"/>
            </div>
            <Navbar />
        </section>
    );
};

export default Header;
