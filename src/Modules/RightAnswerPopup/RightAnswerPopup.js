import React from "react";
import Styles from "./RightAnswerPopup.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const RightAnswerPopup = () => {
    console.log()

    const dispatch = useDispatch();

    const numrebQuestionPage = useSelector((state) => state.numberOfCurrentQuestion);
    console.log(numrebQuestionPage)
    // console.log(numrebQuestionPage);

    const questionPage = (number) => {
        switch (number) {
            case 1:
                return "/second";
            case 2:
                return "/third";
            case 3:
                return "/fourth";
            case 4:
                return "/fifth";
            default:
                return "/";
        }
    };

    const closePopup = () => {
        dispatch({ type: "RIGHT_ANSWER_DISABLED" });
    }


    return (
        <div className={Styles.container}>
            <div className={Styles.inputs}>
                <div className={Styles.brand_title}>Верно!</div>

                <button className={Styles.button} onClick={closePopup}>
                    <Link to={questionPage(numrebQuestionPage)}>
                        давай дальше!
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default RightAnswerPopup;
