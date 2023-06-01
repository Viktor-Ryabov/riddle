import { Button } from "react-bootstrap";
import "./QuestionPage.css";
import { sendAnswerToServer } from "../../utils/API/sendAnswer";

const QuestionPage = () => {
    return (
        <>
            <section className="about">
                <p className="title">QuestionPage </p>
                <p>QuestionPage</p>
                <Button
                    className="primary mt-5"
                    active
                    size="sm"
                    type="submit"
                    class="mt-3 align-self-center btl-light"
                    variant={"btn-outline-secondary"}
                    style={{ width: 200 }}
                    onClick={() => sendAnswerToServer()}
                >
                    ОТПРАВИТЬ ОТВЕТ
                </Button>
            </section>
        </>
    );
};

export default QuestionPage;
