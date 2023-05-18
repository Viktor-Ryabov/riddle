import { Button, Card, Container, Form } from "react-bootstrap";
import Styles from "./PersonalPage.module.css";

const PersonalPage = (props) => {
    const exitUser = () => {
        const token = window.localStorage.getItem("access_token");
        console.log(token)
        window.localStorage.removeItem("access_token");
        console.log(token)
    }

    return (
        <>
            <section className={Styles.contacts}>
                <p className={Styles.title}>Добро пожаловать! {props.name}!</p>
                <Button className="primary mt-5" active size="sm"  type="submit"
                                class="mt-3 align-self-center btl-light"
                                variant={"btn-outline-secondary"}
                                style={{ width: 200 }}
                                onClick={()=> exitUser()}>
                    Exit
                </Button>
            </section>
        </>
    );
};

export default PersonalPage;
