import React from "react";
import Styles from "./WrongAnswer.module.css";
import { useDispatch } from "react-redux";

const WrongAnswer = () => {
    const dispatch = useDispatch();

    return (
        <div className={Styles.container}>
            <div className={Styles.inputs}>
                <div className={Styles.brand_title}>
                    Ваш ответ не правильный
                </div>

                <button
                    className={Styles.button}
                    type="send"
                    onClick={() => {
                        dispatch({ type: "WRONG_ANSWER_DISABLED" });
                    }}
                >
                    ок, подумаю ещё
                </button>
            </div>
        </div>
    );
};

export default WrongAnswer;
