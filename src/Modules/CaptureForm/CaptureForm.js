import React from "react";
import Styles from "./CaptureForm.module.css";
import { useDispatch, useSelector } from "react-redux";

const CaptureForm = (props) => {
    const dispatch = useDispatch();
    const answer = useSelector((state) => state.answer);
    console.log(answer);

    const getInputData = () => {
        const newAnswer = document.querySelector("#riddleAnswer").value;
        dispatch({ type: "GOT_ANSWER", payload: newAnswer });
        props.setQuestonModalDisabled();
        checkInputAnswer();
    };

    const checkInputAnswer = () => {
        const newAnswer = document.querySelector("#riddleAnswer").value;
        if (newAnswer != "рябов") {
            dispatch({ type: "IS_ANSWER_WRON", payload: 1});
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
