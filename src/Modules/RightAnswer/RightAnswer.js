import React from "react";
import Styles from "./RightAnswer.module.css";

const RightAnswer = () => {

    return (
        <div className={Styles.container}>
            <div className={Styles.inputs}>
                <div className={Styles.brand_title}>Верно!</div>

                <button
                    className={Styles.button}
                    type="send"
                >
                    давай дальше!
                </button>
            </div>
        </div>
    );
};

export default RightAnswer;
