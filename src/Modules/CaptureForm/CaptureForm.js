import React from "react";
import Styles from "./CaptureForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { rightAnswersObject } from "../../constants/rightAnswersObject";

const CaptureForm = () => {
    const dispatch = useDispatch();
    const numberOfCurrentQuestion = useSelector(
        (state) => state.numberOfCurrentQuestion
    );
    let rightAnswer = 1;

    const whatIsRightAnswer = (number) => {
        if (number == 1){
            rightAnswer = rightAnswersObject.first;;
        } else if (number == 2) {
            rightAnswer = rightAnswersObject.second
        } else if (number == 3) {
            rightAnswer = rightAnswersObject.third;
        } else if (number == 4) {
            rightAnswer = rightAnswersObject.fourth;
        } else if (number == 5) {
            rightAnswer = rightAnswersObject.fifth;
        }
        // switch (number) {
        //     case 1:
        //         rightAnswer = rightAnswersObject.first;
        //     case 2:
        //         rightAnswer = rightAnswersObject.second;
        //     case 3:
        //         rightAnswer = rightAnswersObject.third;
        //     case 4:
        //         rightAnswer = rightAnswersObject.fourth;
        //     case 5:
        //         rightAnswer = rightAnswersObject.fifth;
        //     default:
        //         rightAnswer = "";
        // }
        console.log(`rightAnswer is: ${rightAnswer}`);
    };

    const getInputData = () => {
        
        const newAnswer = document.querySelector("#riddleAnswer").value;
        dispatch({ type: "GOT_ANSWER", payload: newAnswer });
    };

    const checkInputAnswer = () => {
        whatIsRightAnswer(numberOfCurrentQuestion);
        const newAnswer = document.querySelector("#riddleAnswer").value;

        getInputData();
        if (newAnswer !== rightAnswer) {
            dispatch({ type: "IS_ANSWER_WRON", payload: 1 });
            dispatch({ type: "WRONG_ANSWER_ACTIVE" });
        } else {
            dispatch({ type: "QUESTION_NOTICE_DISABLED" });
            dispatch({ type: "RIGHT_ANSWER", plusOne: 1 });
            dispatch({ type: "RIGHT_ANSWER_ACTIVE" });
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
                    onClick={() => checkInputAnswer()}
                >
                    ГОТОВО! скорее всего правильный
                </button>
            </div>
        </div>
    );
};

export default CaptureForm;
