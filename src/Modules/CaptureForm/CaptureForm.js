import React from "react";
import Styles from "./CaptureForm.module.css";
import { useDispatch, useSelector } from "react-redux";

const CaptureForm = (props) => {
    const dispatch = useDispatch();
    const answer = useSelector((state) => state.answer);
    const wronAnswerNoticeActive = useSelector(
        (state) => state.wronAnswerNoticeActive
    );
    const rightAnswerNotiseActive = useSelector(
        (state) => state.rightAnswerNotiseActive
    );
    const questionNotiseActive = useSelector(
        (state) => state.questionNotiseActive
    );
    console.log(answer);

    const getInputData = () => {
        const newAnswer = document.querySelector("#riddleAnswer").value;
        dispatch({ type: "GOT_ANSWER", payload: newAnswer });
        checkInputAnswer();
    };

    const checkInputAnswer = () => {
        const newAnswer = document.querySelector("#riddleAnswer").value;
        if (newAnswer != "рябов") {
            dispatch({ type: "IS_ANSWER_WRON", payload: 1 });
            dispatch({ type: "WRONG_ANSWER_ACTIVE" });
        } else {
            // dispatch({ type: "RIGHT_ANSWER_ACTIVE" });
        }
    };

    return (
        <div className={Styles.container}>
            <div className={Styles.inputs}>
                <div className={Styles.brand_title}>Введите Ваш ответ</div>

                <input
                    id="riddleAnswer"
                    className={Styles.input}
                    type="text"
                    placeholder="Cкорее всего неправильный Ваш ответ"
                />
                <button
                    className={Styles.button}
                    type="send"
                    onClick={() => getInputData()}
                >
                    ГОТОВО! скорее всего правильный
                </button>
            </div>
        </div>
    );
};

export default CaptureForm;
