import Styles from "./PersonalPage.module.css";

const PersonalPage = (props) => {
    return (
        <>
            <section className={Styles.contacts}>
                <p className={Styles.title}>Добро пожаловать! {props.name}!</p>
            </section>
        </>
    );
};

export default PersonalPage;
