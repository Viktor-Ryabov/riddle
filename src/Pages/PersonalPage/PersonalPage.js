import { Button, Card, Container, Form } from "react-bootstrap";
import Styles from "./PersonalPage.module.css";
import { Link } from "react-router-dom";
import { BASE_URL, LOGIN_ROUTE } from "../../constants/routeConstants";

const PersonalPage = (props) => {
    const exitUser = () => {
        window.localStorage.removeItem("access_token");
        window.location.replace("http://questlocation.ru/");
    };

    return (
        <>
            <section className={Styles.contacts}>
                <p className={Styles.title}>Добро пожаловать! {props.name}!</p>
                <Button
                    className="primary mt-5"
                    active
                    size="sm"
                    type="submit"
                    class="mt-3 align-self-center btl-light"
                    variant={"btn-outline-secondary"}
                    style={{ width: 200 }}
                    onClick={() => exitUser()}
                >
                    Exit
                </Button>
            </section>
        </>
    );
};

export default PersonalPage;
