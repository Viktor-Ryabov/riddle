import { Button, Card, Container, Form } from "react-bootstrap";
import Styles from "./PersonalPage.module.css";
import { Link} from "react-router-dom";

const PersonalPage = (props) => {
    const exitUser = () => {
        window.localStorage.removeItem("access_token");
        window.location.reload();
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
                    <Link to="/auth">Exit</Link>
                </Button>
            </section>
        </>
    );
};

export default PersonalPage;
